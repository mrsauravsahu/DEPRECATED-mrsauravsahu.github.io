import { CommonUtilsService } from "App/Services/CommonUtilsService"
import { DateTime } from "luxon"

const sut = new CommonUtilsService()

describe('stringifyDate', () => {
  describe('given a DateTime value', () => {
    it('should generate a valid date string', async () => {
      const expectedDateString = "2020-05-03";
      const dateString = await sut.stringifyDateAsync(
        DateTime.fromString(
          expectedDateString,
          "yyyy-mm-dd"
        )
      );

      expect(dateString).toEqual(expectedDateString)
    })
})
})
