import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Post from "App/Models/Post";
import TmpFileProvider from '@ioc:providers/TmpFileProvider';
import CreatePostValidator from "App/Validators/CreatePostValidator";
import PostNotFoundException from "App/Exceptions/PostNotFoundException";
import BlogNotFoundException from "App/Exceptions/BlogNotFoundException";
import Blog from "App/Models/Blog";

export default class PostsController {
  public async uploadPostForBlog({ request, params }: HttpContextContract) {
    const { blogId } = params;

    const blog = await Blog.find(blogId);
    if (!blog) throw new BlogNotFoundException(blogId);

    const input = await request.validate(CreatePostValidator);
    const { file } = input;

    const filePath = await TmpFileProvider.saveFileAsync(file, 'uploads/posts');

    const postToAdd: Partial<Post> = {
      file: filePath,
      extension: 'md',
      blogId
    };

    const addedPost = await Post.create(postToAdd)

    return {
      data: addedPost
    }
  }

  public async download({ params, response }: HttpContextContract) {
    const blogId = parseInt(params.blogId);
    const postId = parseInt(params.postId);

    const post = await Post
      .query()
      .where('id', postId)
      .andWhere('blog_id', blogId)
      .first();

    if (!post) throw new PostNotFoundException(postId);

    const file = await TmpFileProvider.getBufferAsync(post.file);

    response.status(200);
    response.type('application/octet-stream');
    response.send(file);
  }
}
