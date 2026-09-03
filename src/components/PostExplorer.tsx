import { useMemo, useState } from "react";
import type { PostSummary } from "../lib/posts";

export default function PostExplorer({ posts }: { posts: PostSummary[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const term = query.trim().toLocaleLowerCase("pt-BR");
    return term ? posts.filter((post) => [post.title, post.subtitle, post.excerpt, post.author, ...post.tags].join(" ").toLocaleLowerCase("pt-BR").includes(term)) : posts;
  }, [posts, query]);

  return (
    <>
      <label className="search-row">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m16 16 5 5" /></svg>
        <span className="sr-only">Buscar no arquivo</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar" />
        {query && <button className="clear-button" type="button" onClick={() => setQuery("")} aria-label="Limpar busca">×</button>}
      </label>
      <div className="archive-list">
        {filtered.map((post) => (
          <article className="archive-item" key={post.slug}>
            <time className="archive-date" dateTime={post.date}>{post.formattedDate}</time>
            <div>
              <h2 className="archive-title"><a href={post.url}>{post.title}</a></h2>
              <p className="archive-excerpt">{post.excerpt}</p>
              <div className="topic-row">{post.tags.map((tag) => <span className="topic" key={tag}>{tag}</span>)}</div>
            </div>
            <a className="arrow-mark" href={post.url} aria-label={`Ler ${post.title}`}>↗</a>
          </article>
        ))}
      </div>
      {!filtered.length && <p className="archive-excerpt">Nenhum texto encontrado.</p>}
    </>
  );
}
