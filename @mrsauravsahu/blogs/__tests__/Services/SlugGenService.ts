import { SlugGenService } from "App/Services/SlugGenService"
import { DateTime } from "luxon";

const sut = new SlugGenService();

describe('generateSlugAsync', () => {
  describe('given a title and a creation time', () => {
    it('should generate a slug', async () => {

      const slug = await sut.generateSlugAsync('sample',
        DateTime.fromObject({
          year: 2020,
          month: 7,
          day: 14
        })
      );
      expect(slug).toBe('2020-07-14/sample')
    })
  })
})
