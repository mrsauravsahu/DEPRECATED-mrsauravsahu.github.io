<svelte:options tag="ss-card" />

<script>
  export let title;
</script>

<style>
  .root {
    font-family: var(--ss-font-family);
    background-color: rgb(var(--ss-bg));
    border: var(--ss-border-width) solid rgb(var(--ss-accent));
    border-radius: var(--ss-border-radius);
    padding: 1rem;
  }

  .title-container {
    color: rgb(var(--ss-accent));
    font-size: calc(2 * var(--ss-base-font-size));
    margin-bottom: 1rem;
  }
  .content-container {
    color: rgb(var(--ss-accent));
  }
</style>

<div class="root">
  <div class="title-container">{title}</div>
  <div class="content-container">
    <slot />
  </div>
</div>
