<script>
  export let href;
</script>

<style>
  a {
    text-decoration-line: none;
    cursor: pointer;
    color: rgb(var(--ss-accent));
    font-weight: 100;
    font-family: var(--ss-font-family);
    border: 0.0625rem solid transparent;
    transition: all 0.2s linear;
    box-sizing: border-box;
    border-bottom: 0.0625rem solid rgb(var(--ss-accent));
  }

  div {
    display: inline-flex;
    padding: 0.25rem;
    border-radius: calc(var(--ss-border-radius) / 8);
  }

  @media (hover: hover) {
    div:hover > a {
      border-bottom: 0.0625rem solid rgb(var(--ss-accent));
      /* transform: translateY(-0.25rem); */
      transform: scaleY(1.25) scaleX(1.25);
      background-color: rgb(var(--ss-bg));
    }
  }
</style>

<svelte:options tag="ss-anchor" />
<div>
  <a {href}>
    <slot />
  </a>
</div>
