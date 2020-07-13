import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Application from "@ioc:Adonis/Core/Application";

export default class BlogPostsController {
  public async upload({ request}: HttpContextContract) {
    const file = request.file('file');
    await file?.move(Application.tmpPath('uploads/blog-posts'))
    return {
      data: file?.filePath
    }
  }
}
