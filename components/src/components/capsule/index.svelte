<script>
  export let text
</script>

<style>
  div {
    font-weight: 800;
    font-family: var(--ss-font-family);
    padding: 1rem;
    display: inline-block;
    border-radius: 2rem;

    color: rgb(var(--ss-bg));
    background-color: rgb(var(--ss-accent));
  }

  
</style>

<svelte:options tag="ss-bubble" />
<div>{text}</div>
