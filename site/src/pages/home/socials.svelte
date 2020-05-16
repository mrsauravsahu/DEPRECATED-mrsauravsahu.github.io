<script>
  import { goto } from "@sapper/app";
</script>

<div class="social-container">
  <ss-title>--socials</ss-title>
  <ss-button
    text="github"
    on:click={() => goto('https://github.com/mrsauravsahu')} />
  <ss-button
    text="twitter"
    on:click={() => goto('https://twitter.com/mrsauravsahu')} />
  <ss-button
    text="unsplash"
    on:click={() => goto('https://unsplash.com/@mrsauravsahu')} />
  <ss-button
    text="instagram"
    on:click={() => goto('https://instagram.com/mrsauravsahu')} />
</div>
