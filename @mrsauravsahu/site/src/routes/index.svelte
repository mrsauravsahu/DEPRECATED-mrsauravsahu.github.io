<script lang="ts" context="module">
  export async function preload({ params }) {
    const response = await this.fetch("home.json");
    const data = await response.json();
    return data;
  }
</script>

<script lang="ts">
  import { theme } from "../stores/theme";

  export let highlights, latestBlog;
  import About from "../pages/home/about.svelte";
  import Highlights from "../pages/home/highlights.svelte";
  import Socials from "../pages/home/socials.svelte";
  import Tag from "../pages/home/tag.svelte";
  import WhatsNew from "../pages/home/whats-new.svelte";
</script>

<svelte:head>
  <title>Saurav Sahu</title>
</svelte:head>

<Tag />
<About />
<WhatsNew {latestBlog} />
<Socials theme={$theme} />
<Highlights projects={highlights} theme={$theme} />
