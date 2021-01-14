import { urqlClient } from "../../setup/urql";

const superagent = require('superagent');

export const get = async (_, res) => {
    const dataUrl = `${process.env.BLOGS_BASE_URL}/api/blogs?sorts=-createdAt`;
    console.log(`Fetching blogs from: ${dataUrl}`)

    const allBlogsResponse = await urqlClient.query(`
    {
        blogs(order: {
            createdAt: DESC
        }) {
            id
            title
            description
            createdAt
            approxTimeToRead
        }

        totalCount: blogsCount
    }
    `).toPromise()

    const jsonString = JSON.stringify({
       ...allBlogsResponse.data,
       count: 1
    });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(jsonString);
}