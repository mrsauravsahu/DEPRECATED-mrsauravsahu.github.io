/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// root
Route.get('/', 'HealthController.index')

// blogs
Route.get('blogs', 'BlogsController.getAll')
Route.post('blogs', 'BlogsController.create')
Route.get('blogs/:blogId', 'BlogsController.getById')

// blog posts
Route.post('/blogs/:blogId/posts', 'PostsController.uploadPostForBlog')
Route.get('/blogs/:blogId/posts/:postId/file', 'PostsController.download')
