# mrsauravsahu.github.io

WIP for life: A little site that tells the world who I am. https://mrsauravsahu.github.io

--- 

## How to run locally?

#### 1. Install Pre-requisites

You'll need node and npm for running the app locally. 

#### 2. Install Package manager 

I'm using `pnpm` for package management. You can install it if you don't have it already
```
npm i -g pnpm
```
---
#### 3. Install dependencies
```
pnpm i
```
---
#### 4. Build the components project
```
pnpm --prefix projects/components build
```

or 
```
cd projects/components
pnpm build
```
---
#### 5. Run the site
```
pnpm --prefix projects/site dev
```

or 
```
cd projects/site
pnpm dev
```
