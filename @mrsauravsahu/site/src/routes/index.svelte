<script lang="ts" context="module">
  export async function preload({ params }) {
    const response = await this.fetch("home.json");
    const { highlights, latestBlog } = await response.json();
    return { highlights, latestBlog };
  }
</script>

<script lang="ts">
  export let highlights, latestBlog;

  import { theme } from "../stores/theme";
  import About from "../pages/home/about.svelte";
  import Highlights from "../pages/home/highlights.svelte";
  import Tag from "../pages/home/tag.svelte";
  import WhatsNew from "../pages/home/whats-new.svelte";
</script>

<svelte:head>
  <title>Saurav Sahu</title>
</svelte:head>

<Tag />
<About />
<WhatsNew {latestBlog} />
<Highlights projects={highlights} theme={$theme} />
