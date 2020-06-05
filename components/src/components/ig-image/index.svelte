<svelte:options tag="ss-ig-image" />

<style></style>

<script>
  export let src;
  export let message;
</script>

<div>
  <div>{message}</div>
  <!-- 
    TODO: Research how to fix alt prop in svelte 
    error: cannot read property match of null
  -->
  <img {src} alt="instagram style"/>
</div>
