// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { Response } from "Contracts/response";
import { GetBlogsDto } from 'Contracts/response.get-blogs';

export default class BlogsController {
  public async getAll(): Promise<Response<GetBlogsDto[]>> {
    // TODO: make db call
    const blogs = []
    return { data: <unknown>blogs as GetBlogsDto[] }
  }
}
