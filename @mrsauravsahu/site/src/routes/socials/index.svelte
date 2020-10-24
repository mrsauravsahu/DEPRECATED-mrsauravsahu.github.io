<script lang="ts" context="module">
  export async function preload() {
    // Get socials data
    const socialsUrl = "/data/socials.json";
    console.log(`Fetching socials data from: ${socialsUrl}`);
    const socialsResponse = await this.fetch(socialsUrl);
    const { data: socials } = await socialsResponse.json();
    return { socials };
  }
</script>

<script>
  export let socials = [];
  import { theme } from "../../stores/theme";

  import Socials from "../../pages/home/socials.svelte";
</script>

<Socials theme={$theme} {socials} />
