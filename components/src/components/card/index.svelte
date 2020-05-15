<style>
  .root {
      font-family: var(--ss-font-family);
      background-color: rgb(var(--ss-bg));
  }

  ::slotted(*) {
      /* color: rgb(var(--ss-accent)); */
      color: white;
  }
</style>

<div class="root">
  <slot name="title" />
  <slot name="content" />
</div>
