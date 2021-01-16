import { urqlClient } from "../../setup/urql";

export const get = async (_, res) => {
    const dataUrl = `${process.env.BLOGS_BASE_URL}/api/blogs?sorts=-createdAt`;
    console.log(`Fetching blogs from: ${dataUrl}`)

    let state = {
        endCursor: undefined,
        hasNextPage: true
    }

    let blogs = [];

    do {
        const allBlogsResponse = await urqlClient.query(`
        query ($after: String) {
            blogs(first: 1, after: $after, order: {
                createdAt: DESC
            }) {
                nodes {
                    id
                    title
                    description
                    createdAt
                    approxTimeToRead
                }

                pageInfo {
                    endCursor
                    startCursor
                    hasNextPage
                }
            }
        }
    `, { after: state.endCursor }).toPromise()

        blogs = [...blogs, ...(allBlogsResponse.data.blogs.nodes || [])]
        state = {
            hasNextPage: allBlogsResponse.data.blogs.pageInfo.hasNextPage,
            endCursor: allBlogsResponse.data.blogs.pageInfo.endCursor
        }

    } while (state.hasNextPage);

    const jsonString = JSON.stringify({
        blogs,
        totalCount: blogs.length
    });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(jsonString);
}