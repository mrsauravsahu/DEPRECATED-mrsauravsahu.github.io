import { FileServiceConfig } from "Contracts/service.file-service";
import * as fs from 'fs';
import { promisify } from 'util';
import { join } from 'path';

export class FileService {
  private config: FileServiceConfig;

  constructor(config: FileServiceConfig) {
    // Object.assign(this.config, config);
    this.config = config;
  }

  async getBufferAsync(filePath: string): Promise<Buffer> {
    const fullFilePath = join(this.config.basePath, filePath);
    const buffer = await promisify(fs.readFile)(fullFilePath);
    return buffer;
  }
}
