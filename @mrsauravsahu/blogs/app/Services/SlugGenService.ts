import { DateTime } from "luxon";
import {snakeCase } from 'change-case'

export class SlugGenService {
  static async generateSlugAsync(title: string, creationTime: DateTime):
    Promise<string> {
    const titleKebabified = snakeCase(title, {delimiter: '-'})
    return `${creationTime.toISODate()}/${titleKebabified}`;
  }
}
