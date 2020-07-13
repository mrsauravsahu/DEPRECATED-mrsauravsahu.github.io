<script context="module">
  import { blogSlugGenerator } from "../../utils/blog";

  export async function preload({ params, query }) {
    const res = await this.fetch(`/data/blogs.json`);
    const data = await res.json();
    let { posts } = data;

    const { slug } = params;

    var post = posts.filter(p => slug == blogSlugGenerator(p))[0];

    if (post) {
      return { post };
    } else {
      this.error(404, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  wc-markdown :global(:not(pre) > code) {
    background-color: rgb(var(--ss-accent));
    padding: 0.1rem 0.5rem;
    border-radius: 0.25rem;
    color: rgb(var(--ss-bg));
  }

  wc-markdown :global(pre) {
    font-size: var(--ss-base-font-size);
    font-family: "Courier New", Courier, monospace;
  }

  wc-markdown :global(a) {
    color: rgb(var(--ss-accent));
    font-weight: 800;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="content">
  <h1>{post.title}</h1>

  <wc-markdown
    src={`/data/blog-posts/${blogSlugGenerator(post)}.md`}
    highlight />
</div>
