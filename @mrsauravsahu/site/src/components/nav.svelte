<script lang="ts">
  import { PfHeader } from "@propfull/kit";

  export let content;
</script>

<style>
  nav {
    box-sizing: border-box;
    flex: 0 0 auto;
    display: flex;
    width: 100%;
    padding: 1rem;
    flex-direction: column;
    align-items: stretch;
    flex-wrap: wrap;
    background-color: rgb(var(--ss-bg));
  }

  a {
    text-decoration: none;
    font-weight: 900;
    padding: 0.25rem;
    color: rgb(var(--ss-bg));
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

  :global(nav h1, nav h4) {
    margin: 0.25rem 0;
  }

  :global(nav h1) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 48rem) {
    .nav-secondary-container {
      flex-direction: row;
    }
  }
</style>

<nav>
  <div class="nav-primary-container">
    <a href={content.primary.path}>
      <PfHeader theme="dark">{content.primary.label}</PfHeader>
    </a>
    <!-- <Theme /> -->
  </div>
  <div class="nav-secondary-container">
    {#each content.secondary as navItem}
      <a rel={navItem.preFetch ? 'prefetch' : undefined} href={navItem.path}>
        <PfHeader theme="dark" type="h4">{navItem.label}</PfHeader>
      </a>
    {/each}
  </div>
</nav>
