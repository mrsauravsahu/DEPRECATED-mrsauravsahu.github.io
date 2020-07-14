import { DateTime } from "luxon";

export class CommonUtilsService {
  static async stringifyDateAsync(dateTime: DateTime) {
    return dateTime.toFormat("yyyy-mm-dd");
  }
}
