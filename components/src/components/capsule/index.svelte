<script>
  export let text
</script>

<style>
  .root {
    font-weight: 800;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    padding: 1rem;
    display: inline-block;
    border-radius: 2rem;

    color: var(--ss-accent);
    background-color: var(--ss-bg);
  }
</style>

<svelte:options tag="ss-bubble" />
<div class={`root`}>{text}</div>
