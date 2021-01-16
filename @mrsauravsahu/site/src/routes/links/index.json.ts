import { urqlClient } from "../../setup/urql";

export const get = async (_, res) => {
    const dataUrl = `${process.env.BLOGS_BASE_URL}/api/links`
    console.log(`Fetching links from: ${dataUrl}`)
    const allLinksResponse = await urqlClient.query(`
    {
        links
        {
            url
            title
            createdAt
        }
    }
    `).toPromise()

    const json = { data: allLinksResponse.data.links }

    const jsonString = JSON.stringify(json);
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(jsonString)
}