import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class CreateBlogPostValidator {
  constructor (private ctx: HttpContextContract) {
  }

  public schema = schema.create({
    file: schema.file({
      extnames: ['md'],
      size: '1mb'
    })
  })

  public cacheKey = this.ctx.routeKey
  public messages = {}
}
