FROM oven/bun AS build

WORKDIR /app

# Cache dependencies
COPY package.json bun.lock tsconfig.json ./
RUN bun install

COPY src ./src

ENV NODE_ENV=production

RUN bun build \
  src/index.ts \
  --compile \
  --minify-whitespace \
  --minify-syntax \
  --outfile server

FROM gcr.io/distroless/base

WORKDIR /app

COPY --from=build /app/server ./server

ENV NODE_ENV=production

EXPOSE 3000
CMD ["./server"]
