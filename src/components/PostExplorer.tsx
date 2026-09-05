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
        <span className="sr-only">Pesquisar textos</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Pesquisar no arquivo" autoComplete="off" />
        {query && <button className="clear-button" type="button" onClick={() => setQuery("")} aria-label="Limpar pesquisa">×</button>}
      </label>

      <nav aria-label="Arquivo de textos">
        <ul className="archive-list">
          {filtered.map((post) => (
            <li key={post.slug}>
              <a href={post.url}>
                <time dateTime={post.date}>{post.date.slice(0, 10)}</time>
                <span>{post.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {!filtered.length && <p className="empty-state">Nenhum texto encontrado.</p>}
    </div>
  );
}
