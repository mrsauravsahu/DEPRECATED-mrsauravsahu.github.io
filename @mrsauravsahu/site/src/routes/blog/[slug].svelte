<script context="module">
  export async function preload({ params }) {
    const { slug } = params;
    const response = await this.fetch(`blog/${slug}.json`);
    const data = await response.json();
    return data;
  }
</script>

<script>
  export let blog, blogContentUrl;
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
  <title>{blog.title}</title>
</svelte:head>

<div class="content">
  <h1>{blog.title}</h1>

  <wc-markdown highlight src={blogContentUrl} />
</div>
