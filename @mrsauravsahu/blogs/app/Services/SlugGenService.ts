import { DateTime } from "luxon";

export class SlugGenService {
  async generateSlugAsync(title: string, creationTime: DateTime):
    Promise<string> {
    return `${creationTime.toISODate()}/${title}`;
  }
}
