<script lang="ts">
  import Theme from "./theme.svelte";
  export let content;
</script>

<style>
  nav {
    flex: 0 0 auto;
    display: flex;
    width: 100%;
    padding: 1rem;
    flex-direction: column;
    align-items: stretch;
    flex-wrap: wrap;
    background-color: rgb(var(--ss-accent));
  }

  a {
    text-decoration: none;
    font-weight: 900;
    padding: 0.25rem;
    color: rgb(var(--ss-bg));
  }
  ss-title {
    --ss-accent: var(--ss-bg);
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

  @media only screen and (min-width: 48rem) {
    nav {
      /* margin: 1rem; */
    }

    .nav-secondary-container {
      flex-direction: row;
    }
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
