// Prefixa caminhos internos com o base do Astro, necessário quando o site
// roda em subpasta (ex.: GitHub Pages em /mt-metal/).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const withBase = (path: string) => `${base}${path}`;
