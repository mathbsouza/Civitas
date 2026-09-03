import { useMemo, useState } from "react";
import type { PostSummary } from "../lib/posts";

export default function PostExplorer({ posts }: { posts: PostSummary[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase("pt-BR");
    return term
      ? posts.filter((post) => [post.title, post.subtitle, post.excerpt, post.author, ...post.tags].join(" ").toLocaleLowerCase("pt-BR").includes(term))
      : posts;
  }, [posts, query]);

  return (
    <div className="explorer">
      <label className="search-row">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m16 16 5 5" /></svg>
        <span className="sr-only">Pesquisar textos</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Pesquisar" autoComplete="off" />
        {query && <button className="clear-button" type="button" onClick={() => setQuery("")} aria-label="Limpar pesquisa">×</button>}
      </label>

      <nav className="vertical-index" aria-label="Textos">
        {filtered.map((post, index) => (
          <a className="index-item" href={post.url} key={post.slug}>
            <span className="index-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="index-title">{post.title}</span>
            <time dateTime={post.date}>{post.formattedDate}</time>
          </a>
        ))}
      </nav>

      {!filtered.length && <p className="empty-state">—</p>}
    </div>
  );
}
