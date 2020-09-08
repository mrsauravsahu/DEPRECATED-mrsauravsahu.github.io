import { FileServiceConfig } from "Contracts/service.file-service";
import { v4 as uuid } from 'uuid';
import * as fs from 'fs';
import { promisify } from 'util';
import { join } from 'path';
import {  MultipartFileContract } from "@ioc:Adonis/Core/BodyParser";

export class FileService {
  private config: FileServiceConfig;

  constructor(config: FileServiceConfig) {
    this.config = config;
  }

  async getBufferAsync(filePath: string): Promise<Buffer> {
    const fullFilePath = join(this.config.basePath, filePath);
    const buffer = await promisify(fs.readFile)(fullFilePath);
    return buffer;
  }

  async saveFileAsync(file: MultipartFileContract, pathToSave: string): Promise<string> {
    const containerPath = pathToSave.replace('(^\/)*|(\/$)*', '')

    const fileId = uuid();
    const fileDir = join(this.config.basePath, containerPath,);

    const fileName = `${fileId}.${file.extname ?? ''}`;

    file.move(fileDir, { name: fileName });
    return `${containerPath}/${fileName}`;
  }
}
