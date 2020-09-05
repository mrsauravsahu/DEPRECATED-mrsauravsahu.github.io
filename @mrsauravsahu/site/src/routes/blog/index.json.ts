const superagent = require('superagent');

export const get = async (_, res) => {
    const dataUrl = `${process.env.BLOGS_BASE_URL}/api/blogs`;
    console.log(`Fetching blogs from: ${dataUrl}`)
    const allBlogsResponse = await superagent.get(dataUrl)
    const json = allBlogsResponse.body
    const { data: blogs } = json;

    const jsonString = JSON.stringify(blogs);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(jsonString);
}