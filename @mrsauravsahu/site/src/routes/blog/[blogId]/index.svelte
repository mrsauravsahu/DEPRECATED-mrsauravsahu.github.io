<script context="module">
  export async function preload({ params }) {
    const { blogId } = params;
    const response = await this.fetch(`blog/${blogId}.json`);
    const data = await response.json();
    return data;
  }
</script>

<script>
  export let blog;

  const blogUrl = `blog/${blog.id}/${blog.posts[0].id}/file`;
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

  wc-markdown :global(img) {
    max-width: 100%;
    margin-bottom: 0.5rem;
    display: block;
  }
</style>

<svelte:head>
  <title>{blog.title}</title>
</svelte:head>

<div class="content">
  <h1>{blog.title}</h1>
  <ss-anchor href={blogUrl}>🔽 read raw</ss-anchor>
  <!-- TODO: fix crawling without this extra anchor tag -->
  <a href={blogUrl} />
  <wc-markdown src={blogUrl} highlight />
</div>
