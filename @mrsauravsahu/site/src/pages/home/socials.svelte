<script lang="ts">
  import { goto } from "@sapper/app";
  import {PfButton} from '@propfull/kit'
  export let theme;
</script>

<style>
  .social-links {
    display: flex;
    flex-direction: row;
    /* flex-ite */
    flex-wrap: wrap;
  }
</style>

<ss-title id="socials">--socials</ss-title>
<div class="social-container ss-content">
  <p>Here's how you can get in touch with me 😊️</p>
  <div class="social-links">
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
  </div>
</div>
