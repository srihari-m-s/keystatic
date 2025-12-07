# Agent Guidelines for Keystatic Astro Template

## Commands
- **Build**: `astro build` or `npm run build`
- **Dev**: `astro dev` or `npm run dev`
- **Preview**: `astro preview` or `npm run preview`
- **Package manager**: pnpm

## Code Style
- **TypeScript**: Strict config extending `astro/tsconfigs/strict`
- **Imports**: Use `@/*` alias for `./src/*`, relative imports for local files
- **JSX**: React JSX with `react-jsx` transform
- **Components**: `.astro` for Astro components, `.tsx` for React
- **Styling**: Tailwind CSS with DaisyUI themes (light/dark)
- **Content**: Markdoc format, Zod schemas for validation
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Error handling**: Use try/catch for async operations, validate with Zod
- **Types**: Strict typing required, no `any` types</content>
<parameter name="filePath">AGENTS.md