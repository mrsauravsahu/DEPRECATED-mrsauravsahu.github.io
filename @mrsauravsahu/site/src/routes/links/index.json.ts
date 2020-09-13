const superagent = require('superagent');

export const get = async (_, res) => {
    // TODO: Order by createdAt
    const dataUrl = `${process.env.BLOGS_BASE_URL}/api/links`
    console.log(`Fetching links from: ${dataUrl}`)
    const allLinksResponse = await superagent.get(dataUrl)
    const json = allLinksResponse.body

    const jsonString = JSON.stringify(json);
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(jsonString)
}