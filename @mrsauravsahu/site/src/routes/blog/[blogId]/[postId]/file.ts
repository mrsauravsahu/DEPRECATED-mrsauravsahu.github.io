const superagent = require('superagent');

export const get = async (req, res) => {
    const { blogId, postId } = req.params;

    const fileUrl = `${process.env.BLOGS_BASE_URL}/blogs/${blogId}/posts/${postId}/file`;
    console.log(`Fetching blog content with id: ${blogId} from ${fileUrl}`);
    const fileResponse = await superagent
        .get(fileUrl)
        .buffer(true)
        .parse(superagent.parse.text)

    res.writeHead(200, { 'Content-Type': 'text/markdown' });
    res.end(fileResponse.text);
}