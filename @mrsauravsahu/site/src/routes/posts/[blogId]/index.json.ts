import { urqlClient } from "../../../setup/urql";

const superagent = require('superagent');

export const get = async (req, res) => {
    const { blogId } = req.params;

    const blogByIdUrl = `${process.env.BLOGS_BASE_URL}/api/blogs/${blogId}`;
    console.log(`Fetching blog with id: ${blogId} from ${blogByIdUrl}`);
    const blogByIdResponse = await urqlClient.query(`
    {
        blog: blogById(input: {
          id: ${blogId} 
          }) {
          id
          title
          approxTimeToRead
          createdAt
        }
    }`).toPromise()

    const jsonString = JSON.stringify(blogByIdResponse.data)
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(jsonString);
}