import { FileService } from "App/Services/FileService";
import { readFile } from 'fs';

jest.mock('fs', () => ({
  readFile: jest.fn((src: string, callback) => {
    if (src.includes('invalid')) callback('invalid')
    callback(null, src)
  })
}))

const readFileMock = <jest.Mock<typeof readFile>>(readFile as unknown);
const basePath = 'basePath';
const fileId = 'uploads/sample-file.md';

beforeEach(() => {
  readFileMock.mockClear();
})

describe('getBufferAsync', () => {
  const sut = new FileService({
    basePath,
  })

  describe('given a fileId, should get me the correct file from the file system', () => {
    it('when fileId is valid', async () => {
      await sut.getBufferAsync(fileId);

      expect(readFileMock).toHaveBeenCalledTimes(1);
      expect(readFileMock.mock.calls[0][0]).toBe(`${basePath}/${fileId}`);
    });
  })

  describe('given a fileId, should throw an error',  () => {
    it('when the file is not found', () => {
      expect(sut.getBufferAsync('invalid-file.md'))
        .rejects
        .toThrow('invalid-file.md');
    })
  })
})

describe('saveFileAsync', () => {
  // const sut = new FileService({ basePath });

  describe('given a MultiPartFileContract and a containerPath', () => {
    it.todo('move the file to the correct location');
    it.todo('should generate a uuid for the fileName');
    it.todo('should return the full Path back')
  })
})
