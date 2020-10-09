<script lang="ts" context="module">
  export async function preload({ params }) {
    const response = await this.fetch("home.json");
    const data = await response.json();
    return data;
  }
</script>

<script lang="ts">
  export let highlights, latestBlog;
  import About from "../pages/home/about.svelte";
  import Projects from "../pages/home/projects.svelte";
  import Socials from "../pages/home/socials.svelte";
  import Tag from "../pages/home/tag.svelte";
  import WhatsNew from "../pages/home/whats-new.svelte";
</script>

<svelte:head>
  <title>Saurav Sahu</title>
</svelte:head>

<Tag />
<About />
<WhatsNew {latestBlog}/>
<Projects projects={highlights}/>
<Socials />
