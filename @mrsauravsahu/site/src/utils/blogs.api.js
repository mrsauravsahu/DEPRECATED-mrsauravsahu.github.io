export const getBlogsAsync = async (fetch) => {
    const dataUrl = `${process.env.BLOGS_BASE_URL}/blogs`;
    console.log(`Fetching blogs from: ${dataUrl}`)
    const allBlogsResponse = await fetch(dataUrl)
    const json = await allBlogsResponse.json()
    const { data: blogs } = json;
    return blogs;
}