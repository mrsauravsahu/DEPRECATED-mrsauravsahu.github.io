import { Exception } from '@poppinss/utils'

/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@poppinss/utils` allows defining
| a status code and error code for every exception.
|
| @example
| new BlogPostNotFoundException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class BlogPostNotFoundException extends Exception {
  constructor(id: number) {
    super(`The blogPost with id: ${id} cannot be found.`, 404, 'BLOG_POST_NOT_FOUND');
  }
}
