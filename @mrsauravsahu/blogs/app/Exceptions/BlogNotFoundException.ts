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
| new BlogNotFoundException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class BlogNotFoundException extends Exception {
  constructor(id: number) {
    super(`The blog with id: ${id} cannot be found.`, 404, 'BLOG_NOT_FOUND');
  }
}
