import { Constants } from "../constants";

export const getBlogsAsync = async (fetch) => {
    const dataUrl = `${Constants.BLOGS_BASE_URL}/blogs`;
    console.log(`Fetching blogs from: ${dataUrl}`)
    const allBlogsResponse = await fetch(dataUrl)
    const json = await allBlogsResponse.json()
    const { data: blogs } = json;
    return blogs;
}

export const getBlogByIdAsync = async (fetch, blogId) => {
    const dataUrl = `${Constants.BLOGS_BASE_URL}/blogs/${blogId}`;
    console.log(`Fetching blog with id: ${blogId} from ${dataUrl}`);
    const blogByIdResponse = await fetch(dataUrl)
    const json = await blogByIdResponse.json()
    const { data: blog } = json;
    return blog;
}

export const getBlogPostContentUrl = ({ blogId, postId }) => {
    const dataUrl = `${Constants.BLOGS_BASE_URL}/blogs/${blogId}/posts/${postId}/file`;
    return dataUrl
}