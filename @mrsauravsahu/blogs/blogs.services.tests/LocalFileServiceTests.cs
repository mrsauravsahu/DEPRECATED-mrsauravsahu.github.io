using System;
using Xunit;
using blogs.services.contracts;
using blogs.services;
using System.IO;
using System.IO.Abstractions;
using Moq;
using System.Threading.Tasks;
using FluentAssertions;

namespace blogs.services.tests
{
    public class LocalFileServiceTests
    {
        private const string DOES_NOT_EXIST = nameof(DOES_NOT_EXIST);

        private bool created = false;
        private Mock<Stream> mockCreatedFileStream = new Mock<Stream>();
        private readonly Mock<IFileSystem> mockFS;
        private readonly IBlobService sut;

        public LocalFileServiceTests()
        {
            mockFS = new Mock<IFileSystem>();
            mockFS
                .Setup(m => m.Path.Combine(It.IsAny<string[]>()))
                .Returns((string[] parts) => String.Join("/", parts));

            mockFS
                .Setup(m => m.File.Create(It.IsAny<string>()))
                .Returns(new Func<string, Stream>((string path) =>
                {
                    if (path.Contains(DOES_NOT_EXIST) && !created)
                    {
                        throw new DirectoryNotFoundException();
                    }
                    return mockCreatedFileStream.Object;
                }));

            mockFS
                .Setup(m => m.Directory.CreateDirectory(It.IsAny<string>()))
                .Returns(new Func<string, IDirectoryInfo>((string path) =>
                {
                    created = true;
                    return new Mock<IDirectoryInfo>().Object;
                }));

            mockFS
                .Setup(m => m.Directory.Exists(It.IsAny<string>()))
                .Returns(new Func<string, bool>(path =>
                {
                    var exists = !path.Contains(DOES_NOT_EXIST);
                    return exists;
                }));

            sut = new LocalFileService(mockFS.Object, "base");
        }

        [Fact]
        public async Task ShouldSaveAFileToSpecifiedContainer()
        {

            await sut.SaveBlobAsync(
                "container",
                 "file.md",
                 new Mock<MemoryStream>().Object);
        }

        [Fact]
        public async Task ShouldWriteToTheFileIfContainerExists()
        {
            var mockBlob = new Mock<MemoryStream>();

            await sut.SaveBlobAsync("exists", "file.md", mockBlob.Object);

            mockFS.Verify(m => m.File.WriteAllBytes(It.IsAny<string>(), It.IsAny<byte[]>()), Times.Once());
        }

        [Fact]
        public void ShouldNotThrowExceptionIfContainerDoesNotExist()
        {
            var mockBlob = new Mock<MemoryStream>();

            new Action(() => sut.SaveBlobAsync(DOES_NOT_EXIST, "file.md", mockBlob.Object))
            .Should()
            .NotThrow();
        }

        [Fact]
        public async Task ShouldCreateContainerIfDoesNotExist()
        {
            var mockBlob = new Mock<MemoryStream>();
            await sut.SaveBlobAsync(DOES_NOT_EXIST, "file.md", mockBlob.Object);

            mockFS.Verify(m => m.Directory.CreateDirectory($"base/{DOES_NOT_EXIST}"), Times.Once());
        }

        [Fact]
        public async Task ShouldSaveFileIfContainerDoesNotExist()
        {
            var mockBlob = new Mock<MemoryStream>();

            await sut.SaveBlobAsync(DOES_NOT_EXIST, "file.md", mockBlob.Object);

            mockFS.Verify(m => m.File.Create($"base/{DOES_NOT_EXIST}/file.md"), Times.Once());
        }

        [Fact]
        public async Task ShouldWriteToTheFileIfContainerDoesNotExist()
        {
            var mockBlob = new Mock<MemoryStream>();

            await sut.SaveBlobAsync(DOES_NOT_EXIST, "file.md", mockBlob.Object);

            mockFS.Verify(m => m.File.WriteAllBytes(It.IsAny<string>(), It.IsAny<byte[]>()), Times.Once());
        }
    }
}
