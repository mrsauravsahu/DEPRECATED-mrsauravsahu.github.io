<script>
  export let title;
</script>

<style>
  .root {
    font-family: var(--ss-font-family);
    background-color: rgb(var(--ss-bg));
    border-radius: calc(var(--ss-border-radius) / 4);
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.2s all linear;
    box-shadow: 0 0.5rem 1rem rgb(var(--ss-accent), 0.5);
  }

  .title-container {
    padding: 1rem;
    color: rgb(var(--ss-bg));
    -webkit-text-fill-color: rgb(var(--ss-bg));
    background-color: rgba(var(--ss-accent), 0.5);
    font-size: calc(2 * var(--ss-base-font-size));
    font-weight: 800;
    border-bottom: 0.0625rem solid rgb(var(--ss-accent));
    transition: 0.2s all linear;

    border-top-left-radius: calc(var(--ss-border-radius) / 4);
    border-top-right-radius: calc(var(--ss-border-radius) / 4);
  }

  .content-container {
    padding: 1rem;
    color: rgb(var(--ss-accent));
    transition: 0.2s all linear;
  }

  @media only screen and (min-width: 48rem) {
    .title-container {
      box-shadow: 0 0 1rem rgb(var(--ss-accent), 0.25);
    }
  }

  @media (hover: hover) {
    .root:hover {
      box-shadow: 0 0.5rem 1rem rgb(var(--ss-accent), 0.1);
      transform: translateY(0.5rem);
    }

    .title-container {
      background-color: rgb(var(--ss-accent));
      margin: 0;
      color: rgb(var(--ss-bg));
      border-bottom: 0.0625rem solid transparent;
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
