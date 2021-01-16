import { createClient } from '@urql/core';

export const urqlClient = createClient({ url: `${process.env.BLOGS_BASE_URL}/graphql`})
