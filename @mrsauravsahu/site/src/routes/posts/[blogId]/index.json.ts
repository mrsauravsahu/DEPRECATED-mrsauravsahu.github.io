const superagent = require('superagent');

export const get = async (req, res) => {
    const { blogId } = req.params;

    const blogByIdUrl = `${process.env.BLOGS_BASE_URL}/api/blogs/${blogId}`;
    console.log(`Fetching blog with id: ${blogId} from ${blogByIdUrl}`);
    const blogByIdResponse = await superagent.get(blogByIdUrl)
    const { body: { data: blog } } = blogByIdResponse

    const jsonString = JSON.stringify({ blog })
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(jsonString);
}