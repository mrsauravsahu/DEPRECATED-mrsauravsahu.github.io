<script context="module">
  import { blogSlugGenerator } from "../../utils/blog";

  export function preload({ params, query }) {
    return this.fetch("/data/blogs.json")
      .then(r => r.json())
      .then(blogData => {
        return { posts: blogData.posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
    text-decoration: none;
  }

  a {
    all: unset;
    cursor: pointer;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="container">
  <div class="content">
    <p>Here a few thoughts that I thought should be written down...</p>
    <ul>
      {#each posts as post}
        <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
        <li>
          <a rel="prefetch" href="blog/{blogSlugGenerator(post)}">
            <ss-card title={post.title}>{post.line}</ss-card>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
