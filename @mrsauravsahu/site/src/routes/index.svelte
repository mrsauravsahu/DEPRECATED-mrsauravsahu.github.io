<script lang="ts" context="module">
  export async function preload({ params }) {
    const response = await this.fetch("home.json");
    const { highlights, latestBlog } = await response.json();

    // Get socials data
    const socialsUrl = "/data/socials.json";
    console.log(`Fetching socials data from: ${socialsUrl}`);
    const socialsResponse = await this.fetch(socialsUrl);
    const { data: socials } = await socialsResponse.json();
    return { highlights, latestBlog, socials };
  }
</script>

<script lang="ts">
  export let highlights, latestBlog, socials;
  
  import { theme } from "../stores/theme";
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
<Highlights projects={highlights} theme={$theme} />
<!-- <Socials theme={$theme} {socials} /> -->
