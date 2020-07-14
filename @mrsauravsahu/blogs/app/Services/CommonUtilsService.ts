import { DateTime } from "luxon";

export class CommonUtilsService {
  async stringifyDateAsync(dateTime: DateTime) {
    return dateTime.toFormat("yyyy-mm-dd");
  }
}
