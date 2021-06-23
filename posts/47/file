It's quite difficult to imagine our life without extensions in VSCode, isn't it? If you use VSCode, I'm sure there is a whole list of extensions that you depend on, on a day-to-day basis. Extensions add crazy new features to VSCode that it itself doesn't natively have, some of these include 

- Language Servers for C# Svelte, etc
- Integrating npm tools to the editor like ESLint and Prettier
- Easing dev workflows with extensions like [PostCode](https://marketplace.visualstudio.com/items?itemName=rohinivsenthil.postcode)

I created and published my first VSCode Extension a few weeks back and here are my learnings. 

## What did I build?

Have you ever experienced this - you pull in the latest code from your teams' repository and without changing anything you see ESLint already trying to format the files differently. 😂 Well, this is because of inconsistent VSCode settings between team members. Your teammates could also be missing extensions that format files well. All of these issues can be fixed if everyone in your team used consistent VSCode settings and Extensions. So, this is what I build - **[VSCode Manager](http://github.com/mrsauravsahu/vscode-manager)** is an extension to help you create isolated VSCode profiles to achieve consistent settings and extensions between you and your team members. There are other features too, but that's the gist.

## Pros

### 1. VSCode Extension API is Awesome 😎

The first thing to know is that almost everything inside VSCode is customizable, thanks to the [Extension API](https://code.visualstudio.com/api). You can add almost an functionality to VSCode - and the docs cover most of the basic use-cases, so you should be good to go.

### 2. Great Project Scaffolding

VSCode uses yeoman generators to scaffold your extensions. It's easy to generate a JavaScript or TypeScript extension starter with [genertor-code](https://www.npmjs.com/package/generator-code)

Transpiling and bundling your code is already setup and so is debugging support, so it takes less than five minutes to get started.

### 3. Programmatic Access to UI FTW

Rather than creating custom views (which you can easily do with webviews), the VSCode Extension API allows you to hook into the native UI to add elements into your VSCode interface.

And if required, you can use any framework or even just html and css to create custom views.

### 4. Easy Publishing

Publishing to the VSCode Marketplace is as easy as packaging your bundle with [vsce](https://www.npmjs.com/package/vsce). You can create a .VSIX bundle and this can be pushed to the [VSCode Marketplace](https://marketplace.visualstudio.com/manage) for verification, after which it'll appear in the Marketplace.

### 5. Declarative Manifest for Contribution Points

Any contributions like a new command in the Command Palette or a new List in the Sidebar has to be declared in `package.json` This helps easily view what the extension contributes to the user's VSCode.  

## Room for Improvement

### 1. Access to Host Machine

Any extension that gets installed in your machine basically has access to your entire machine, there's a bit of a concern there, but I hope Microsoft is verifying the extensions that are listed in the Marketplace.

### 2. Project Structure

Even though the starter template sets up most of the things, organizing your code in the repo is a more of a responsibility of the developer. I'd like to get a reference project to organize things, but I've tried my best to organize all the code I've written [@mrsauravsahu/cvscode-manager](https://github.com/mrsauravsahu/vscode-manager).

## Conclusion

This was a brief overview of what my learnings were rom creating my first VSCode Extension and things that could be improved. At the time of writing, an early version of [VSCode Manager](https://github.com/mrsauravsahu/vscode-manager) can be downloaded from the VSCode Marketplace or the Extensions Tab. And I'm actively adding new features and improvements to it, so, it this is something you find helpful or want to contribute to, checkout the repo and DM me for details. 

Have a great day and happy coding!

— [Saurav](https://twitter.com/mrsauravsahu)