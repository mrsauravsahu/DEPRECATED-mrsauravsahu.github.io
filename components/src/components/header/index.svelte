<style>
  span {
    margin: 1rem 0;
    font-weight: 800;
    font-family: var(--ss-font-family);
    font-size: calc(2.5 * var(--ss-base-font-size));
    color: rgb(var(--ss-accent));
  }
</style>

<svelte:options tag="ss-title" />

<span>
  <slot />
</span>
