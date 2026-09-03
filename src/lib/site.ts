export const SITE = {
  name: "Civitas",
  description: "Um repositório de filosofia política, instituições e vida pública.",
  author: "Matheus Bento de Souza",
  rssPath: "/rss.xml",
  defaultImage: "/images/brand/civitas-cover.svg"
};

export function withBase(path: string) {
  if (!path || path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;

  if (path.startsWith(normalizedBase)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;

  return `${normalizedBase}${normalizedPath}`;
}
