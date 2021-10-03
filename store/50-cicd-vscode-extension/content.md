Github Actions has changed the way CI/CD is done for Open-Source projects. In this blog post, I want to show you one awesome way this has come in handy, in one of my projects.

## Premise

I manage ['Custom Profiles for VSCode'](https://github.com/mrsauravsahu/vscode-manager), which is an extension to help you create isolated VSCode Instances and also for teams to align on their VSCode configuration.

## The Problem

Every time I make an improvement to the project, I have to do this additional task of creating a .vsix bundle and upload it to the VSCode Marketplace. What I'd love to do is, merge my code changes and automate all the deployment related tasks.

## Github Actions to the Rescue

I chose to tackle this with Github Actions. I create a PR - which should ideally try to build and test my package and once merged, automatically deploy to the VSCode Marketplace.

## Let's Dive into the Code

> All the code is available on github in the 'Custom Profiles for VSCode' repository. You can find the workflow file here - [cd.yml](https://github.com/mrsauravsahu/vscode-manager/blob/cool/.github/workflows/cd.yml)

Here's the simple workflow file I used to automate the deployment.

```
name: "cd"

on:
  push:
    branches:
      - cool

jobs:
  cd:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout to branch
        uses: actions/checkout@v2

      - name: Setup node.js
        uses: actions/setup-node@v1
        with:
          node-version: ${{ secrets.NODE_VERSION }}

      - name: Install packages
        run: npm ci
      
      - name: Calculate version
        id: calculateVersion
        run: |
          APP_VERSION=`cat package.json | jq ".version" -M | sed 's/\"//g'`
          echo "::set-output name=AppVersion::$APP_VERSION"
          echo "app version = v$APP_VERSION"
      - name: Build VSIX package
        run: npm run build -- -o custom-profiles-for-vscode.v${{ steps.calculateVersion.outputs.AppVersion }}.vsix

      - name: Publish extension package
        env:
          VSCODE_MARKETPLACE_TOKEN: ${{ secrets.VSCODE_MARKETPLACE_TOKEN }}
        run: npm run vsce -- publish -p $VSCODE_MARKETPLACE_TOKEN

      - uses: actions/upload-artifact@v2
        name: Upload artifact
        with:
          name: custom-profiles-for-vscode.v${{ steps.calculateVersion.outputs.AppVersion }}.vsix
          path: custom-profiles-for-vscode.v${{ steps.calculateVersion.outputs.AppVersion }}.vsix
```

The steps should be fairly simple to understand, which include:

1. get the code from my branch
2. setup node.js on the Runner
3. install the npm packages

### 4. Calculate the version

I'm using the version field in the `package.json` file to determine which version of the package I need to deploy. 

This is not an issue even if I forget to bump the version, as the deployment would anyway fail.

I will integrate GitVersion with this at some point. Stay tuned for that blog post! 😁

### 5. Building the project

I'm using [VSCE - VSCode Extension Manager](https://github.com/microsoft/vscode-vsce) package to build and deploy my project to the Marketplace.

```
"scripts": {
    ...
    "build": "(rm -rf out || true) && mkdir out && cp package.json out && vsce package"
    ...
},
```

Here I copy the package.json and the contents of the build and get ready to deploy. This creates the `.vsix` file which we'll check out later.

### 6. Deploy to Marketplace

Again, VSCE comes handy to push the build to the marketplace. I've added a token for authentication.

You can create this token through Azure DevOps. Check this page for more details - https://code.visualstudio.com/api/working-with-extensions/publishing-extension. You need a token with the `marketplace:manage` scope and you should be good to go.

Inject this as a secret in your Github repository's Secrets page, and you'll be able to use it in your Workflow.

### 7. Publishing an artifact

If the VSCode Marketplace isn't your thing, I also publish the extension as a `.vsix` file which can be installed in VSCode by using the Command Palette (<kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>) and then `Extensions: Install from VSIX`

And it's that easy to automate deployment for your VSCode Extension Projects to the Marketplace! Give it a try, I'm sure it'll save a you a lot of time.

Have a great one. 👋

-Saurav