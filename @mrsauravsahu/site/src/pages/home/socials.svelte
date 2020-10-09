<script lang="ts">
  import { goto } from "@sapper/app";
</script>

<style>
  .social-links {
    display: flex;
    flex-direction: row;
    /* flex-ite */
    flex-wrap: wrap;
  }

  ss-button {
    margin-right: 0.5rem;
    margin-bottom: 0.75rem;
  }
</style>

<ss-title id="socials">--socials</ss-title>
<div class="social-container content">
  <p>Here's how you can get in touch with me 😊️</p>
  <div class="social-links">
    <ss-button on:click={() => goto('mailto:mrsauravsahu@outlook.com')}>
      email
    </ss-button>
    <ss-button on:click={() => goto('https://github.com/mrsauravsahu')}>
      github
    </ss-button>
    <ss-button
      on:click={() => goto('https://www.linkedin.com/in/mrsauravsahu/')}>
      linkedIn
    </ss-button>
    <ss-button on:click={() => goto('https://twitter.com/mrsauravsahu')}>
      twitter
    </ss-button>
    <ss-button on:click={() => goto('https://instagram.com/mrsauravsahu')}>
      instagram
    </ss-button>
    <ss-button on:click={() => goto('https://unsplash.com/@mrsauravsahu')}>
      unsplash
    </ss-button>
  </div>
</div>
