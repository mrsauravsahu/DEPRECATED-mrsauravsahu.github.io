const superagent = require('superagent');

export const get = async (req, res) => {
    const { slug: blogId } = req.params;

    const blogByIdUrl = `${process.env.BLOGS_BASE_URL}/blogs/${blogId}`;
    console.log(`Fetching blog with id: ${blogId} from ${blogByIdUrl}`);
    const blogByIdResponse = await superagent.get(blogByIdUrl)
    const { data: blog } = blogByIdResponse.body

    const postId = blog.posts[0].id;

    const fileUrl = `${process.env.BLOGS_BASE_URL}/blogs/${blogId}/posts/${postId}/file`;
    const jsonString = JSON.stringify({ blog, blogContentUrl: fileUrl })
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(jsonString);
}