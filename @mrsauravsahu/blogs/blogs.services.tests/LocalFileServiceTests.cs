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
        private string sampleBasePath = nameof(sampleBasePath);

        private readonly Mock<IFileSystem> mockFS;
        private readonly IBlobService sut;

        public LocalFileServiceTests()
        {
            mockFS = new Mock<IFileSystem>();
            mockFS
                .Setup(m => m.Path.Combine(It.IsAny<string[]>()))
                .Returns("fullPath");

            mockFS
                .Setup(m => m.File.Create(It.IsAny<string>()))
                .Returns(new Mock<Stream>().Object);

            sut = new LocalFileService(mockFS.Object, sampleBasePath);
        }

        [Fact]
        public async Task ShouldSaveAFileToSpecifiedContainer()
        {
            // Create fake objects for testing
            var sampleFile = new MemoryStream();
            await sut.SaveBlobAsync("container", "file.md", sampleFile);
        }

        [Fact]
        public void ShouldNotThrowExceptionIfContainerDoesNotExist()
        {
            mockFS
                .Setup(m => m.File.Create(It.IsAny<string>()))
                .Throws(new DirectoryNotFoundException());

            var mockBlob = new Mock<MemoryStream>();

            new Action(() => sut.SaveBlobAsync("container", "file.md", mockBlob.Object))
            .Should()
            .NotThrow();
        }
    }
}
