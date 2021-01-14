<script lang="ts" context="module">
  export async function preload() {
    const response = await this.fetch("links.json");
    const linksResponse = await response.json();
    return { links: linksResponse.data };
  }
</script>

<script lang="ts">
  export let links; //: Link[];
  import { PfCard, PfHeader } from "@propfull/kit";
  import { DateTime } from "luxon";

  // import type { Link } from "../../../types/models/link";
</script>

<svelte:head>
  <title>Links</title>
</svelte:head>

<section class="ss-content">
  <div>
    <PfHeader type="h1" theme="dark">--links</PfHeader>
    <p>
      Links to interesting places that are pinned for your perusal. 😬 These get
      updated every week with the latest YouTube videos. And coming soon, will
      showcase latest photos from Unsplash.
    </p>
  </div>
  <div class="links-content">
    <div class="links-container">
      {#each links as link}
        <a href={link.url}>
          <PfCard theme="dark">
            <div slot="title">
              <PfHeader type="h2" theme="dark">{link.title}</PfHeader>
            </div>
            <div class="" slot="content">
              <h4>{DateTime.fromISO(link.createdAt).toRelative()}</h4>
            </div>
          </PfCard>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .ss-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .links-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .links-container {
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap-reverse;
    justify-content: space-between;
    width: 100%;
    margin-top: 2rem;
  }

  a {
    all: unset;
    cursor: pointer;
    margin: 0;
    margin-bottom: 1rem;
    width: 100%;
    min-height: 10rem;
  }

  div[slot="title"],
  div[slot="content"] {
    padding: 0 1rem;
  }

  p {
    margin: 0;
  }

  @media only screen and (min-width: 48rem) {
    a {
      width: calc(50% - 0.5rem);
    }
  }
</style>
