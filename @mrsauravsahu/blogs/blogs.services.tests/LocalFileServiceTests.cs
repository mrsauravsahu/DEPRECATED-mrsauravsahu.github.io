using System;
using Xunit;
using blogs.services.contracts;
using blogs.services;
using System.IO;

namespace blogs.services.tests
{
    public class LocalFileServiceTests
    {
        private string sampleBasePath = nameof(sampleBasePath);
        private readonly IBlobService sut;

        public LocalFileServiceTests()
        {
            sut = new LocalFileService(sampleBasePath);
        }

        [Fact]
        public void ShouldSaveAFileToSpecifiedContainer()
        {
            // Create fake objects for testing
            var sampleFile = new MemoryStream();
            sut.SaveBlobAsync("container", "file.md", sampleFile);
        }
    }
}
