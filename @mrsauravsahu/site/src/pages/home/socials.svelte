<script lang="ts">
  // import { goto } from "@sapper/app";
  import { PfCard, PfHeader } from "@propfull/kit";
  export let theme;
  export let socials = [];
</script>

<style>
  .social-links {
    display: flex;
    flex-direction: row;
    /* flex-ite */
    flex-wrap: wrap;
  }

  .social-link-anchor {
    all: unset;
    width: 100%;
    cursor: pointer;
    margin: 1rem 0;
    min-height: 6rem;
    margin: 0.25rem;
  }

  .social-card-content{
    display: flex;
    justify-content: space-evenly;
  }

  @media only screen and (min-width: 48rem) {
    .social-link-anchor {
      width: calc(25% - 1rem);
      height: 6rem;
    }
  }
</style>

<ss-title id="socials">--socials</ss-title>
<div class="social-container ss-content">
  <p>Here's how you can get in touch with me 😊️</p>
  <div class="social-links">
    {#each socials as socialLink}
      <a class="social-link-anchor" href={socialLink.url}>
        <PfCard {theme}>
          <div slot="content" class="social-card-content">
            <PfHeader theme='dark' type='h2'>{socialLink.label}</PfHeader>
          </div>
        </PfCard>
      </a>
    {/each}
  </div>
</div>
