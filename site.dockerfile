FROM node:12.18.3

RUN npm i -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm i

RUN pnpm --prefix @mrsauravsahu/components build 

CMD pnpm --prefix @mrsauravsahu/site dev