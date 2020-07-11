<script>
  import { goto } from "@sapper/app";
</script>

<ss-title id="socials">--socials</ss-title>
<div class="social-container content">
  <p>Here's how you can get in touch with me 😊️</p>
  <ss-button
    text="mrsauravsahu@outlook.com"
    on:click={() => goto('mailto:mrsauravsahu@outlook.com')} />
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
    on:click={() => goto('https://instagram.com/iamsauravsahu')} />
</div>
