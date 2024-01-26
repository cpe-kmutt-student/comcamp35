FROM node:18-alpine AS base
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR /app
COPY . ./

FROM base AS deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install

FROM deps AS build
RUN pnpm build

FROM build AS deploy
ENV APP_BACKEND_URL APP_BACKEND_URL

ENV NODE_ENV=production

CMD [ "pnpm", "preview" ]