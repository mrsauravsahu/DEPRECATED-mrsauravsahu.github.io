<script context="module">
  export function preload() {
    return this.fetch("/data/_layout.json")
      .then(r => r.json())
      .then(data => ({ layoutContent: data }));
  }
</script>

<script>
  import { onDestroy, onMount } from "svelte";
  import Nav from "../components/nav.svelte";

  import { theme } from "../stores/theme";
  import { setThemeVariables, THEMES } from "../utils/theme";

  let currentTheme, themeSubscription;

  onMount(() => {
    // import external and ss components
    import("@vanillawc/wc-markdown/index");
    import("../../../components/public/build/bundle");

    themeSubscription = theme.subscribe(theme => {
      currentTheme = theme;

      // Update CSS variables
      setThemeVariables(theme);
    });

    onDestroy(themeSubscription);
  });

  export let layoutContent;
</script>

<style>
  main {
    padding: 1rem;
    width: 100%;
  }
</style>

<Nav content={layoutContent.nav} />
<main>
  <slot />
</main>
