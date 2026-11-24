create table if not exists public.blog_config (
  id text primary key,
  initialized boolean not null default false
);

alter table public.blog_config enable row level security;
grant select on public.blog_config to anon, authenticated;
grant insert, update, delete on public.blog_config to authenticated;

drop policy if exists "Public can read blog config" on public.blog_config;
create policy "Public can read blog config"
  on public.blog_config for select to anon, authenticated
  using (true);

drop policy if exists "Portfolio admins can insert blog config" on public.blog_config;
create policy "Portfolio admins can insert blog config"
  on public.blog_config for insert to authenticated
  with check (public.is_portfolio_admin());

drop policy if exists "Portfolio admins can update blog config" on public.blog_config;
create policy "Portfolio admins can update blog config"
  on public.blog_config for update to authenticated
  using (public.is_portfolio_admin())
  with check (public.is_portfolio_admin());

drop policy if exists "Portfolio admins can delete blog config" on public.blog_config;
create policy "Portfolio admins can delete blog config"
  on public.blog_config for delete to authenticated
  using (public.is_portfolio_admin());

create table if not exists public.blog_posts (
  id text primary key,
  slug text not null unique,
  title text not null,
  category text not null default 'Design',
  published_at date not null default current_date,
  excerpt text not null default '',
  content text not null default '',
  image text not null default '',
  video text,
  author text not null default 'The Linkage Team',
  published boolean not null default true,
  source_slug text,
  deleted_from_cms boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists blog_posts_source_slug_key
  on public.blog_posts (source_slug)
  where source_slug is not null;

alter table public.blog_posts enable row level security;
grant select on public.blog_posts to anon, authenticated;
grant insert, update, delete on public.blog_posts to authenticated;

drop policy if exists "Public can read published blog posts" on public.blog_posts;
create policy "Public can read published blog posts"
  on public.blog_posts for select to anon, authenticated
  using (published or public.is_portfolio_admin());

drop policy if exists "Portfolio admins can insert blog posts" on public.blog_posts;
create policy "Portfolio admins can insert blog posts"
  on public.blog_posts for insert to authenticated
  with check (public.is_portfolio_admin());

drop policy if exists "Portfolio admins can update blog posts" on public.blog_posts;
create policy "Portfolio admins can update blog posts"
  on public.blog_posts for update to authenticated
  using (public.is_portfolio_admin())
  with check (public.is_portfolio_admin());

drop policy if exists "Portfolio admins can delete blog posts" on public.blog_posts;
create policy "Portfolio admins can delete blog posts"
  on public.blog_posts for delete to authenticated
  using (public.is_portfolio_admin());
