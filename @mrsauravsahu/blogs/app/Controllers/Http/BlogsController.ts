// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { Response } from "Contracts/response";
import { BlogDto } from 'Contracts/response.blogs';
import Blog from "App/Models/Blog";

export default class BlogsController {
  public async getAll(): Promise<Response<BlogDto[]>> {
    // TODO: Paginate
    const blogs = await Blog.all()
    return { data: <unknown>blogs as BlogDto[] }
  }

  public async create(): Promise<Response<BlogDto>> {
    // TODO: read from request
    const blog = new Blog()
    blog.title = 'second!'

    const createdBlog = await blog.save();
    return {data:createdBlog as BlogDto}
  }
}
