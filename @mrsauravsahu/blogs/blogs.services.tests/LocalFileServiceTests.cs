using System;
using Xunit;
using blogs.services.contracts;
using blogs.services;

namespace blogs.services.tests
{
    public class LocalFileServiceTests
    {
private readonly IBlobService sut;

        public LocalFileServiceTests()
        {
sut = new LocalFileService();
        }

        [Fact]
        public void Test1()
        {

        }
    }
}
