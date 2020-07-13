import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CreateBlogValidator {
  constructor (private ctx: HttpContextContract) {}
    public schema = schema.create({
      title: schema.string({ trim: true ,escape:true}, [
        rules.unique({ table: 'blogs', column: 'title' }),
      ])
    })

    public cacheKey = this.ctx.routeKey

    public messages = {}
}
