import { Response } from "Contracts/response";
import { BlogDto } from 'Contracts/response.blogs';
import Blog from "App/Models/Blog";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CreateBlogValidator from "App/Validators/CreateBlogValidator";

export default class BlogsController {
  public async getAll(): Promise<Response<BlogDto[]>> {
    // TODO: Paginate
    const blogs = await Blog.all()
    return { data: <unknown>blogs as BlogDto[] }
  }

  public async create(ctx:HttpContextContract): Promise<Response<BlogDto>> {
    const blogToCreate = await ctx.request.validate(CreateBlogValidator);
    const createdBlog = await Blog.create(blogToCreate)

    ctx.response.status(201)

    return{
      data: createdBlog
    }
  }
}
