import { useState } from 'react';

export interface PostSummary {
  title: string;
  description: string;
  date: string;
  category: string;
  readingMinutes: number;
  href: string;
}

export default function PostSearch({ posts }: { posts: PostSummary[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const categories = ['All', ...new Set(posts.map((post) => post.category))];
  const visible = posts.filter((post) => {
    const matchesCategory = category === 'All' || post.category === category;
    const matchesQuery = `${post.title} ${post.description}`.toLowerCase().includes(query.trim().toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return <>
    <div className="filter-bar" role="group" aria-label="Filter articles">
      <input
        type="search"
        aria-label="Search articles"
        placeholder="Search articles"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {categories.map((name) => <button key={name} type="button" aria-pressed={category === name} onClick={() => setCategory(name)}>{name}</button>)}
    </div>
    <div className="post-list" aria-live="polite">
      {visible.map((post) => <article className="post-row" key={post.href}>
        <time>{post.date}</time>
        <div><h3><a href={post.href}>{post.title}</a></h3><p>{post.description}</p></div>
        <span className="post-meta">{post.category} · {post.readingMinutes} min</span>
      </article>)}
      {visible.length === 0 && <p className="no-results">No articles match that search. Try another term or category.</p>}
    </div>
  </>;
}
