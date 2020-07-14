import { Response } from "Contracts/response";
import { BlogDto } from 'Contracts/response.blogs';
import Blog from "App/Models/Blog";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CreateBlogValidator from "App/Validators/CreateBlogValidator";
import BlogNotFoundException from "App/Exceptions/BlogNotFoundException";

export default class BlogsController {
  public async getAll(): Promise<Response<BlogDto[]>> {
    // TODO: Paginate
    const blogs = await Blog.all()
    return { data: blogs }
  }

  public async create(ctx:HttpContextContract): Promise<Response<BlogDto>> {
    const blogToCreate = await ctx.request.validate(CreateBlogValidator);
    const createdBlog = await Blog.create(blogToCreate)

    ctx.response.status(201)

    return{
      data: createdBlog
    }
  }

  public async getById({ params }: HttpContextContract) {
    const blogId = parseInt(params.blogId);

    const blog = await Blog.find(blogId);

    if (!blog) throw new BlogNotFoundException(blogId);

    await blog.preload('posts')

    return {
      data: blog
    }
  }
}
