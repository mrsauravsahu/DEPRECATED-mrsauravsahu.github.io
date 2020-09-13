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
    flex-direction: column-reverse;
    width: 100%;
    align-items: stretch;
    align-self: center;
  }

  .link {
    padding: 2rem 0;
  }

  .link-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .link-content > h4 {
    margin: 0;
    margin-bottom: 0.5rem;
  }

  a {
    all: unset;
    cursor: pointer;
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
    {#each links as link}
    <a href={link.url}>
      <div class="link">
        <ss-card title={link.title}>
          <div class="link-content">
            <h4>{DateTime.fromISO(link.createdAt).toRelative()}</h4>
          </div>
        </ss-card>
      </div>
    </a>
    {/each}
  </div>
</div>
