<script context="module">
  import { blogSlugGenerator } from "../../utils/blog";
  import { getBlogsAsync } from "../../utils/blogs.api";

  export async function preload() {
    const blogs = await getBlogsAsync(this.fetch);
    return { blogs };
  }
</script>

<script>
  export let blogs;
</script>

<style>
  .posts-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  li {
    list-style-type: none;
    text-decoration: none;
    margin-bottom: 1rem;
    width: 100%;
    min-height: 12rem;
  }

  ul a {
    all: unset;
    cursor: pointer;
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  @media only screen and (min-width: 48rem) {
    li {
      width: calc(50% - 1rem);
    }
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="container">
  <div class="content">
    <p>
      Here are a few thoughts that I thought should be written down... Don't
      worry, the old blogs will get imported here.
    </p>
    <p>
      Currently at:
      <a href="https://mrsauravsahu.wordpress.com">
        mrsauravsahu.wordpress.com
      </a>
    </p>
    <ul class="posts-container">
      {#each blogs as blog}
        <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
        <li>
          <a rel="prefetch" href="blog/{blog.id}">
            <ss-card title={blog.title}>{blog.description}</ss-card>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
