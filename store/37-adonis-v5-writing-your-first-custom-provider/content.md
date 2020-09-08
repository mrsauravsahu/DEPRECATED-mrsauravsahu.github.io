From the past couple of days, I've been working with [Adonis V5](https://preview.adonisjs.com). In fact, this site's API is being written with Adonis V5. It's a really cool and feature-packed Framework for node. 

<!--
## TLDR
just go <a href="#tldr">here</a> 😴
-->

Well, if you're reading this, there's a high likelyhood that you're pretty familiar with Adonis. Let's look at how to create a custom provider in Adonis V5. Throughout this post, I'll use this blogs API as an example, all the code for which is available here: [mrsauravsahu.github.io on Github](https://github.com/mrsauravsahu/mrsauravsahu.github.io). 

So, for storing the actual blog files into a storage service, I'm using the temporary app directory. There's a `POST /blog-posts` API that takes a markdown file and writes it to the tmp directory, the basic implementation of which is here:

```javascript
...
public async upload({ request }: HttpContextContract) {
    const file = request.file('file');

    // generate a unique id for the file name
    const fileId = uuid();
    const filePath = `uploads/blog-posts/${fileId}.md`;

    // save to tmp directory
    await file?.move(Application.tmpPath(), { name:filePath })

    const blogPostToAdd: Partial<BlogPost> = {
        file: filePath,
        extension: 'md'
    };

    // add to db
    const addedBlogPost = await BlogPost.create(blogPostToAdd)

    return {
        data: addedBlogPost
    }
}
...
```

As I'm writing this, just realised the above move operation should ideally be done by the `TmpFileProvider` 🤔 (maybe I should refactor that later) well, back to the actual provider. Right, so in the download API - `GET /blog-posts/:id/file` we need to get the buffer back from the File System.

<a name="tldr"></a>
## Steps to create a custom provider in Adonis V5

1. Create your actual implementation, keeping one thing in mind - ❌ no external dependencies. So, for our example, it's as simple as the code below. (Follow TDD, I didn't this time, but don't tell anybody 🤫)

```javascript
import { FileServiceConfig } from "Contracts/service.file-service";
import * as fs from 'fs';
import { promisify } from 'util';
import { join } from 'path';

export class FileService {
  private config: FileServiceConfig;

  constructor(config: FileServiceConfig) {
    this.config = config;
  }

  async getBufferAsync(filePath: string): Promise<Buffer> {
    const fullFilePath = join(this.config.basePath, filePath);
    const buffer = await promisify(fs.readFile)(fullFilePath);
    return buffer;
  }
}
```

2. Create your provider
Use the ace command `node ace make:provider TmpFileProvider` to create your provider. It should add the actual file and an entry in the providers section of the `.adonisrc.json` file.

3. Setup your implementation in the register section of the provider. My service looks like it can be a singleton, so decided based on your needs. The provider now looks like this: 

```javascript
export default class TmpFileProvider {
  constructor (protected container: IocContract) {
  }

  public register () {
    // You should be getting the config from the config file
    // but for this, let's keep this simple
    this.container.singleton('providers/TmpFileProvider', () => {
      const config: FileServiceConfig = { basePath: Application.tmpPath() }
      return new FileService(config);
    })
  }

  public async boot () {
    // All bindings are ready, feel free to use them
  }

  public async ready () {
    // App is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
```

4. Now when you use it in your controller, like so:

```javascript
...
public async download({ params, response }: HttpContextContract) {
    // TODO: Clean this lel
    const blogPostId: number = params.id;
    const blogPost = await BlogPost.find(blogPostId);
    // TODO: Use request validation for this
    if (!blogPost) throw new Error('cannot find file');
    const file = await TmpFileProvider.getBufferAsync(blogPost.file);

    response.status(200);
    response.type('application/octet-stream');
    response.send(file);
}
...
```

5. Now when you start your server (or more likely try and hit the API multiple times thinking why it's not working) you'll get this error: 

```zsh
app/Controllers/Http/BlogPostsController.ts:5:29 - error TS2307: Cannot find module '@ioc:providers/TmpFileProvider' or its corresponding type declarations.

import TmpFileProvider from '@ioc:providers/TmpFileProvider';
                              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ℹ  info      re-starting http server
```

We need to add a type declaration telling TypeScript what that provider is returning, which is as simple as this:
```javascript

declare module '@ioc:providers/TmpFileProvider' {
  import { FileService } from "App/Services/FileService";

  const TmpFileProvider: FileService
  export default TmpFileProvider
}

```

You're good to go!!! ❤️

I'm having a lot of fun learning Adonis V5. If you love it too, let's connect on Twitter, or let's do it regardless. 🤷‍♂️

\- [@mrsauravsahu on Twitter](https://twitter.com/mrsauravsahu)