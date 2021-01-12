<script lang="ts">
  import { fade as navTransition } from "svelte/transition";
  import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
  import Icon from "svelte-awesome/components/Icon.svelte";
  export let content;

  let isNavOpen = false;
</script>

<style>
  nav {
    box-sizing: border-box;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    align-items: center;
    flex-wrap: wrap;
    background-color: rgb(var(--ss-bg));
  }

  a {
    text-decoration: none;
    font-weight: 900;
    padding: 0.25rem;
    font-size: 2rem;
    color: rgb(var(--ss-text1));
  }

  button {
    border: none;
    background-color: transparent;
    color: rgb(var(--ss-text1));
  }

  a.logo {
    font-size: 3rem;
    text-transform: uppercase;
  }

  .primary {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .nav-open {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: rgb(var(--ss-bg));
    bottom: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1;
  }

  .nav-open > .primary {
    margin: 1rem;
    width: unset;
  }

  .primary > .nav-links {
    display: none;
  }

  .nav-open > .secondary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  :global(nav h1, nav h4) {
    margin: 0.25rem 0;
  }

  :global(nav h1) {
    font-size: 2rem;
  }

  @media only screen and (min-width: 48rem) {
    .primary > button {
      display: none;
    }

    .primary > .nav-links {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-grow: 1;
      margin: 0 2rem;
    }
    
    .primary > .nav-links > a {
      margin: 0 1rem;
      font-size: 1rem;
    }
  }
</style>

<nav>
  <div class="primary">
    <a
      class="logo"
      href={content.primary.path}
      on:click={() => (isNavOpen = false)}>
      {content.primary.label}</a>
    <button on:click={() => (isNavOpen = !isNavOpen)}>
      {#if !isNavOpen}
        <Icon data={faBars} scale={2.5} />
      {:else}
        <Icon data={faTimes} scale={2.5} />
      {/if}
    </button>
    <div class="nav-links">
      {#each content.secondary as navItem}
        <a
          rel={navItem.preFetch ? 'prefetch' : undefined}
          href={navItem.path}
          on:click={() => (isNavOpen = false)}>
          <!-- <PfHeader theme="dark" type="h4">{navItem.label}</PfHeader> -->
          {navItem.label}
        </a>
      {/each}
    </div>
  </div>
  {#if isNavOpen}
    <div class="nav-open" transition:navTransition={{ duration: 300 }}>
      <div class="primary">
        <a
          class="logo"
          href={content.primary.path}
          on:click={() => (isNavOpen = false)}>{content.primary.label}</a>
        <button on:click={() => (isNavOpen = !isNavOpen)}>
          <Icon data={faTimes} scale={2.5} />
        </button>
      </div>
      <div class="secondary">
        {#each content.secondary as navItem}
          <a
            rel={navItem.preFetch ? 'prefetch' : undefined}
            href={navItem.path}
            on:click={() => (isNavOpen = false)}>
            <!-- <PfHeader theme="dark" type="h4">{navItem.label}</PfHeader> -->
            {navItem.label}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav>
