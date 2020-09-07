FROM node:12.18.3

WORKDIR /app

RUN npm i -g pnpm 

COPY pnpm-workspace.yaml pnpm-lock.yaml package.json ./

COPY @mrsauravsahu ./@mrsauravsahu

RUN pnpm i

# CMD tail -f /dev/null

RUN pnpm --prefix ./@mrsauravsahu/components build
CMD pnpm --prefix ./@mrsauravsahu/site dev

EXPOSE 3000