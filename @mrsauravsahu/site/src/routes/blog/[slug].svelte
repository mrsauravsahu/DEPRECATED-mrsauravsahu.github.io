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

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>

<wc-markdown src={`/data/blog-posts/${blogSlugGenerator(post)}.md`} />
