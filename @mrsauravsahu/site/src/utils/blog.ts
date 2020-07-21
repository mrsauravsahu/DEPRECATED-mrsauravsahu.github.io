// TODO: Move this func to a data class or store
export const blogSlugGenerator = post => `${post.createdOn}-${post.slugSuffix}`;