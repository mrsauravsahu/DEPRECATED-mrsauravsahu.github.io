import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Application from "@ioc:Adonis/Core/Application";
import {v4 as uuid } from 'uuid'
import BlogPost from "App/Models/BlogPost";
import TmpFileProvider from '@ioc:providers/TmpFileProvider';
import CreateBlogPostValidator from "App/Validators/CreateBlogPostValidator";
import BlogPostNotFoundException from "App/Exceptions/BlogPostNotFoundException";

export default class BlogPostsController {
  public async upload({ request }: HttpContextContract) {
    const input = await request.validate(CreateBlogPostValidator);

    const { file } = input;
    const fileId = uuid();
    const filePath = `uploads/blog-posts/${fileId}.md`;
    // TODO: current assumption is file will be markdown
    await file?.move(Application.tmpPath(),{name:filePath})

    const blogPostToAdd: Partial<BlogPost> = {
      file: filePath,
      extension: 'md'
    };

    const addedBlogPost = await BlogPost.create(blogPostToAdd)

    return {
      data: addedBlogPost
    }
  }

  public async download({ params, response }: HttpContextContract) {
    const blogPostId: number = params.id;
    const blogPost = await BlogPost.find(blogPostId);

    if (!blogPost) throw new BlogPostNotFoundException(blogPostId);

    const file = await TmpFileProvider.getBufferAsync(blogPost.file);

    response.status(200);
    response.type('application/octet-stream');
    response.send(file);
  }
}
