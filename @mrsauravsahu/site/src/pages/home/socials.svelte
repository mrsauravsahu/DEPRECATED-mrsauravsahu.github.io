<script lang="ts">
  // import { goto } from "@sapper/app";
  import { PfButton } from "@propfull/kit";
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

  a {
    all: unset;
    width: 100%;
    cursor: pointer;
    margin: 1rem 0;
    min-height: 8rem;
  }

  @media only screen and (min-width: 48rem) {
    a {
      width: calc(50% - 1rem);
      height: 10rem;
    }
  }
</style>

<ss-title id="socials">--socials</ss-title>
<div class="social-container ss-content">
  <p>Here's how you can get in touch with me 😊️</p>
  <div class="social-links">
    <!-- <<<<<<< HEAD
    <PfButton {theme} style='margin: 0.25rem' on:click={() => goto('mailto:mrsauravsahu@outlook.com')}>
      email
    </PfButton>
    <PfButton {theme} style='margin: 0.25rem' on:click={() => goto('https://youtube.com/channel/UCPWETNZS6Cu3X2fYnpME32g')}>
      youtube
    </PfButton>
    <PfButton {theme} style='margin: 0.25rem' on:click={() => goto('https://github.com/mrsauravsahu')}>
      github
    </PfButton>
    <PfButton {theme} style='margin: 0.25rem'
      on:click={() => goto('https://www.linkedin.com/in/mrsauravsahu/')}>
      linkedIn
    </PfButton>
    <PfButton {theme} style='margin: 0.25rem' on:click={() => goto('https://twitter.com/mrsauravsahu')}>
      twitter
    </PfButton>
    <PfButton {theme} style='margin: 0.25rem' on:click={() => goto('https://instagram.com/mrsauravsahu')}>
      instagram
    </PfButton>
    <PfButton {theme} style='margin: 0.25rem' on:click={() => goto('https://unsplash.com/@mrsauravsahu')}>
      unsplash
    </PfButton>
======= -->
    {#each socials as socialLink}
      <a href={socialLink.url}>
        <PfButton {theme} style="margin: 0.25rem">
          {socialLink.label}
        </PfButton>
      </a>
    {/each}
    <!-- >>>>>>> 03def4c... retrieve socials data from local data -->
  </div>
</div>
