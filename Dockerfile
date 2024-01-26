FROM node:18-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app
COPY . ./

ENV APP_BACKEND_URL APP_BACKEND_URL

FROM base AS deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install

FROM deps AS build
RUN pnpm build

FROM build AS deploy

EXPOSE 8000
CMD [ "pnpm", "preview" ]