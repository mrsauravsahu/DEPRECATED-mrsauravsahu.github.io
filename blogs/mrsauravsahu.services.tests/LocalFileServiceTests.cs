using System;
using Xunit;
using mrsauravsahu.services.contracts;
using mrsauravsahu.services;
using System.IO;
using System.IO.Abstractions;
using Moq;
using System.Threading.Tasks;
using FluentAssertions;
using Microsoft.Extensions.Options;
using mrsauravsahu.services.options;

namespace mrsauravsahu.services.tests
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
                .Setup(m => m.FileStream.Create(It.IsAny<string>(), FileMode.Create, FileAccess.Write))
                .Returns(new Func<string, FileMode, FileAccess, Stream>(
                    (string path, FileMode mode, FileAccess access) =>
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


            var options = Options.Create(new LocalFileServiceOptions
            {
                BasePath = "base"
            });
            sut = new LocalFileService(mockFS.Object, options);
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

            mockBlob.Verify(m => m.WriteTo(It.IsAny<Stream>()), Times.Once());
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

            mockFS.Verify(m => m.FileStream.Create(
                $"base/{DOES_NOT_EXIST}/file.md",
                FileMode.Create,
                FileAccess.Write
            ), Times.Once());
        }

        [Fact]
        public async Task ShouldWriteToTheFileIfContainerDoesNotExist()
        {
            var mockBlob = new Mock<MemoryStream>();

            await sut.SaveBlobAsync(DOES_NOT_EXIST, "file.md", mockBlob.Object);

            mockBlob.Verify(m => m.WriteTo(It.IsAny<Stream>()), Times.Once());
        }
    }
}
