<script>
  import Theme from "./theme.svelte";
  export let segment;
  export let content;
</script>

<style>
  nav {
    margin: 0 auto;
    padding: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-wrap: wrap;
  }

  [aria-current] {
    font-weight: 900;
  }

  a {
    text-decoration: none;
    padding: 0.5rem;
    color: rgb(var(--ss-accent));
  }

  a:first {
    width: 100%;
  }

  ss-title {
    display: inline;
  }

  .nav-primary-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .nav-secondary-container {
    display: flex;
    flex-direction: column;
  }
</style>

<nav>
  <div class="nav-primary-container">
    <a href={content.primary.path}>
      <ss-title>{content.primary.label}</ss-title>
    </a>
    <Theme />
  </div>
  <div class="nav-secondary-container">
    {#each content.secondary as navItem}
      <a rel={navItem.preFetch ? 'prefetch' : undefined} href={navItem.path}>
        {navItem.label}
      </a>
    {/each}
  </div>
</nav>
