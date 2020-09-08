Today the [svelte](https://svelte.dev) team announced that TypeScript is finally officially supported in svelte apps. Their [blog](https://svelte.dev/blog/svelte-and-typescript) explains really well how to setup TypeScript for a svelte project. Well... I've been creating this portfolio for a while now - and it uses sapper, so I thought why not try and setup TypeScript for this project 🤷‍♂️ and see how difficult is it, as the other blog left out that part. 

So that is what I've done, and, this is how you setup TypeScript in a sapper app. By the way, the steps are pretty much the same as the official blog, but there are few gotchas, which I will address here.

Note: I'm currently working on the syntax highlighting in the code snippets on the blog - so sorry about that. 🙂

### 1. Install the necessary packages for the migration. 

```bash
pnpm i -D @tsconfig/svelte typescript svelte-preprocess svelte-check @rollup/plugin-typescript
```

I use [pnpm](https://pnpm.js.org/) and I absolutely ❤️ it.

### 2. Add a tsconfig.json for TypeScript Love

```json
{
    "extends": "@tsconfig/svelte/tsconfig.json",
    "include": [
        "src/**/*",
        "src/node_modules"
    ],
    "exclude": [
        "node_modules/*",
        "__sapper__/*",
        "public/*"
    ],
}
```
This is the basic tsconfig.json required for both svelte and sapper apps, and should work. Check if you need to do some modifications to it.


### 3. Update the rollup config
Basically add preprocessing of TypeScript in svelte files and compilation of TypeScript files. My diff looks like this:

```diff
diff --git a/@mrsauravsahu/site/rollup.config.js b/@mrsauravsahu/site/rollup.config.js
...
+import autoPreprocess from 'svelte-preprocess';
+import typeScript from '@rollup/plugin-typescript';
...
@@ -28,13 +30,15 @@ export default {
 			svelte({
 				dev,
 				hydratable: true,
-				emitCss: true
+				emitCss: true,
+				preprocess: autoPreprocess(),
 			}),
 			resolve({
 				browser: true,
 				dedupe: ['svelte']
 			}),
 			commonjs(),
+			typeScript({ sourceMap: dev }),
 
 			legacy && babel({
 				extensions: ['.js', '.mjs', '.html', '.svelte'],
@@ -72,12 +76,14 @@ export default {
 			}),
 			svelte({
 				generate: 'ssr',
-				dev
+				dev,
+				preprocess: autoPreprocess(),
 			}),
 			resolve({
 				dedupe: ['svelte']
 			}),
-			commonjs()
+			commonjs(),
+			typeScript({ sourceMap: dev }),
 		],
 		external: Object.keys(pkg.dependencies).concat(
 			require('module').builtinModules || Object.keys(process.binding('natives'))
@@ -96,6 +102,7 @@ export default {
 				'process.env.NODE_ENV': JSON.stringify(mode)
 			}),
 			commonjs(),
+			typeScript({ sourceMap: dev }),
 			!dev && terser()
 		],
```

Well, basically add the autoPreprocess plugin to everywhere where sapper might have to preprocess svelte file - the client and server sections. And add the typeScript plugin to all the sections - because, well, "TypeScript Everywhere 😎"

### 4. Now the time taking task - let the renaming begin
Update all `.js` files to `.ts` and add the `lang="ts"` attribute to all script sections in `.svelte` files. I could whip up the bash script for this, but I'm going to be careful and since there aren't a lot of files, going to do this manually for now. 😅

Oh, you know what? I'm going to use VSCode to update the script tags with a find and replace
```
Find: '<script'
Files to include: 'src/**/*.svelte'
Replace with: '<script lang="ts"'
```

Now, well, since the service-worker is auto-generated, I don't really want to deal with the typings in there for now, so I'm just going to ignore that entire file by adding a `/// @ts-nocheck` at the top of the file

### 5. Check the compilation

If you run an `pnpm build (or npm build)`, you'll see errors like so:

```bash
✗ server
@rollup/plugin-typescript TS2307: Cannot find module '@sapper/app' or its corresponding type declarations.

1 import * as sapper from '@sapper/app';
                          ~~~~~~~~~~~~~

✗ client
@rollup/plugin-typescript TS2307: Cannot find module '@sapper/app' or its corresponding type declarations.

1 import * as sapper from '@sapper/app';
                          ~~~~~~~~~~~~~
```

Well, this is because sapper doesn't ship with typings yet. I'm not going to write the typings by hand, so, for now, let's add a place holder so that the typeScript compiler can simply add `any` type to all declarations within sapper.

And to do that, we have to update our tsconfig.json like so:

```diff
diff --git a/@mrsauravsahu/site/tsconfig.json b/@mrsauravsahu/site/tsconfig.json
index c711e13..6fd2c46 100644
--- a/@mrsauravsahu/site/tsconfig.json
+++ b/@mrsauravsahu/site/tsconfig.json
@@ -9,4 +9,13 @@
         "__sapper__/*",
         "public/*"
     ],
+    "compilerOptions": {
+        "typeRoots": [
+            "types"
+        ],
+        "types": [
+            "node",
+            "@sapper"
+        ]
+    }
 }
\ No newline at end of file

```

So this tells TypeScripts that we will be defining our types in a folder called `types` and the compilation should include the types for node and sapper. Oh, we also need the types for node and some typeScript helper libraries, this is because we're using them in our `src/server.ts` file, so install these:

```bash
pnpm i -D @types/node tslib
```

### 6. Add dummy typings for Sapper

Create a file called `types/@sapper/index.d.ts` (creating the folders as required) and add the dummy typings as shown below in that file:

```js
declare module '@sapper';
declare module '@sapper/app';
declare module '@sapper/server';
```

### 7. Check the compilation, again

If you try and build now, sapper won't be able to find the entry files to the app. That's because sapper is looking for the `src/client.js`, `src/server.js` and `src/service-worker.js` files, which we renamed. 😂

```bash
> Building...

[!] Error: Could not resolve entry module (src/client.js).
```

So, to fix this, let's update the `input` fields in all the three sections of `rollup.config.js`

```diff
diff --git a/@mrsauravsahu/site/rollup.config.js b/@mrsauravsahu/site/rollup.config.js
...
 export default {
 	client: {
-		input: config.client.input(),
+		input: config.client.input().replace(/\.js$/, '.ts'),
 		output: config.client.output(),
 		plugins: [
 			json(),
@@ -66,7 +66,7 @@ export default {
 	},
 
 	server: {
-		input: config.server.input(),
+		input: input: config.server.input().server.replace(/\.js$/, '.ts'),
 		output: config.server.output(),
 		plugins: [
 			json(),
@@ -93,7 +93,7 @@ export default {
 	},
 
 	serviceworker: {
-		input: config.serviceworker.input(),
+		input: config.serviceworker.input().replace(/\.js$/, '.ts'),
 		output: config.serviceworker.output(),
 		plugins: [
 			resolve(),
...
```

and FINALLY... drum rolls please... 🥁🥁🥁 the compilation should succeed... with a ridiculous number of warnings. You can check all the svelte warnings with `pnpx svelte-check` or `npx svelte-check` as well. To run the sapper projects, you might have to suppress the warnings or fix them first though. But after that... it's all well and good. Now that you have TypeScript ready in your project, you'll have better IntelliSense and you can incrementally fix and augment the typings in your app. Once sapper ships their typings, you can delete the dummy `index.d.ts` file and use the official one as well.

This was a fun blog and I've been waiting for this for so long. Let's talk more about svelte and sapper and all things cool. HMU on twitter


\- [@mrsauravsahu on Twitter](https://twitter.com/mrsauravsahu)
