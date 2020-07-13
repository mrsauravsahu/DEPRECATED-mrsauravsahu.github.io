<script>
  export let title;
</script>

<style>
  .root {
    font-family: var(--ss-font-family);
    background-color: rgb(var(--ss-bg));
    border: var(--ss-border-width) solid rgb(var(--ss-accent));
    border-radius: calc(var(--ss-border-radius) / 4);
    padding: 1rem;
  }

  .title-container {
    color: rgb(var(--ss-accent));
    font-size: calc(2 * var(--ss-base-font-size));
    margin-bottom: 1rem;
    font-weight: 800;
  }

  .content-container {
    color: rgb(var(--ss-accent));
  }
</style>

<svelte:options tag="ss-card" />
<div class="root">
  <div class="title-container">{title}</div>
  <div class="content-container">
    <slot />
  </div>
</div>
