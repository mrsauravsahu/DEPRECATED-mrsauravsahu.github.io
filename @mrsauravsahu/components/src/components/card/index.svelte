<script>
  export let title;
</script>

<style>
  .root {
    font-family: var(--ss-font-family);
    background-color: rgb(var(--ss-bg));
    border: var(--ss-border-width) solid rgb(var(--ss-accent));
    border-radius: calc(var(--ss-border-radius) / 4);
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .title-container {
    padding: 1rem;
    color: rgb(var(--ss-accent));
    font-size: calc(2 * var(--ss-base-font-size));
    font-weight: 800;
    border-bottom: 0.0625rem solid rgb(var(--ss-accent));
    transition: 0.2s all linear;
  }

  .content-container {
    padding: 1rem;
    color: rgb(var(--ss-accent));
    transition: 0.2s all linear;
  }

  @media (hover: hover) {
    .root:hover > .title-container {
      border-top-left-radius: calc(var(--ss-border-radius) / 4);
      border-top-right-radius: calc(var(--ss-border-radius) / 4);
      background-color: rgb(var(--ss-accent));
      margin: 0;
      color: rgb(var(--ss-bg));
      border-bottom: 0.0625rem solid transparent;
    }

    .root:hover > .content-container {
    }
  }
</style>

<svelte:options tag="ss-card" />
<div class="root">
  <div class="title-container">{title}</div>
  <div class="content-container">
    <slot />
  </div>
</div>
