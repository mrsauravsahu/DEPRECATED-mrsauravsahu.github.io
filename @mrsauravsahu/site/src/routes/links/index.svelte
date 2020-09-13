<script lang="ts" context="module">
  export async function preload() {
    const response = await this.fetch("links.json");
    const linksResponse = await response.json();
    return { links: linksResponse.data };
  }
</script>

<script lang="ts">
  import { DateTime } from "luxon";

  export let links;
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
  }

  .links-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: stretch;
    align-self: center;
  }

  .link {
    padding: 2rem 0;
  }

  .link-content {
  }

  .link-content > h4 {
    margin: 0;
    margin-bottom: 0.5rem;
  }

  @media only screen and (min-width: 48rem) {
    .links-container {
      width: 50%;
    }
  }
</style>

<svelte:head>
  <title>Links</title>
</svelte:head>
<div class="content">
  <p>Links to interesting places that are pinned for your perusal. 😬</p>
  <div class="links-container">
    {#each links as link, index}
      <div class="link">
        <ss-card title={`${links.length - index}. ${link.title}`}>
          <div class="link-content">
            <h4>{DateTime.fromISO(link.createdAt).toRelative()}</h4>
            {link.description}
          </div>
        </ss-card>
      </div>
    {/each}
  </div>
</div>
