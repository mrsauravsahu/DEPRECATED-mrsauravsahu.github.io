<script>
  export let text
</script>

<style>
  div {
    font-weight: 800;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    padding: 1rem;
    display: inline-block;
    border-radius: 2rem;

    color: rgb(var(--ss-bg));
    background-color: rgb(var(--ss-accent));
  }

  
</style>

<svelte:options tag="ss-bubble" />
<div>{text}</div>
