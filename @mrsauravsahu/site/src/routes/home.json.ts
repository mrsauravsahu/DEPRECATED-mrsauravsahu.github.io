const superagent = require('superagent');

export const get = async (_, res) => {

// Get highlights
    const highlightsUrl = `${process.env.BLOGS_BASE_URL}/api/Highlights?Sorts=-createdAt`;
    console.log(`Fetching highlights from: ${highlightsUrl}`)
    const allHighlightsResponse = await superagent.get(highlightsUrl)
    const allHighlightsJson = allHighlightsResponse.body
    const { data: highlights } = allHighlightsJson;


    const dataUrl = `${process.env.BLOGS_BASE_URL}/api/Blogs?Sorts=-createdAt&Page=1&PageSize=1`;
    console.log(`Fetching latest blog from: ${dataUrl}`)
    const allBlogsResponse = await superagent.get(dataUrl)
    const json = allBlogsResponse.body
    const { data: [latestBlog] } = json;

    const jsonString = JSON.stringify({ highlights, latestBlog });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(jsonString);
}