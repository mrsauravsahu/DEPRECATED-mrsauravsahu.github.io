import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Application from "@ioc:Adonis/Core/Application";
import {v4 as uuid } from 'uuid'
import BlogPost from "App/Models/BlogPost";
import { FileService } from "App/Services/FileService";

export default class BlogPostsController {
  public async upload({ request }: HttpContextContract) {
    // TODO: refactor into service arch
    const file = request.file('file');

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

  public async download({  params, response }: HttpContextContract) {
    const blogPostId: number = params.id;

    const blogPost = await BlogPost.find(blogPostId);

    if (!blogPost) throw new Error('cannot find file');
    const file = await new FileService({ basePath: Application.tmpPath() })
      .getBufferAsync(blogPost.file);

    response.status(200);
    response.type('application/octet-stream');
    response.send(file);
  }
}
