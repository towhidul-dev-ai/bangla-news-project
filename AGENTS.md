<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Repo: bangla-news-project

Bangla news site: Next.js 16.3.8 (App Router, `src/` dir), React 19, Tailwind CSS v4 + daisyUI 5, better-auth + MongoDB. Single app, no monorepo.

## Commands

- `npm run dev` / `npm run build` / `npm run start`
- `npm run lint` — ESLint 9 flat config. **Currently fails with pre-existing errors** (notably `@typescript-eslint/no-explicit-any` in `src/app/news/[newsId]/page.tsx`), so don't assume your change caused a lint failure.
- No test or typecheck script. Use `npx tsc --noEmit` for a typecheck; `next build` also typechecks.

## Next.js 16 specifics

- `middleware.ts` is deprecated — request interception lives in `src/proxy.ts` and exports a named `proxy()` function (see the `matcher` config there).
- React Compiler is enabled (`reactCompiler: true` in `next.config.ts` + `babel-plugin-react-compiler`).
- `next.config.ts` allows remote images only from `ichef.bbci.co.uk`; other hosts must be added to `images.remotePatterns`.

## Auth & data

- better-auth config: `src/lib/auth.ts`; client: `src/lib/auth-client.ts`; route handler: `src/app/api/auth/[...all]/route.tsx`.
- Auth needs env vars in `.env` (never commit): `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `MONGODB_URL`, `GOOGLE_CLIENT_ID/SECRET`, `GITHUB_CLIENT_ID/SECRET`. Mongo DB name `bangla-news-24` is hardcoded in `src/lib/auth.ts`.
- There is no local data layer or database-backed content: pages fetch everything server-side from `https://news-api-v2.vercel.app/api/news/sections` and `/api/article/{id}`. Article bodies are block arrays (`type: "text" | "subheading" | "image"`), rendered in `src/app/news/[newsId]/page.tsx`.

## Conventions

- Path alias `@/*` → `./src/*`.
- Several pages keep a superseded implementation commented out at the top of the file (e.g. `src/app/news/[newsId]/page.tsx`, `src/proxy.ts`) before the live version below it — read past the comments to find the active code.
- UI text is Bengali (`bn-BD` locale formatting); keep new user-facing strings consistent.
