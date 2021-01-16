<script lang="ts" context="module">
  export function preload() {
    return this.fetch("/data/_layout.json")
      .then((r) => r.json())
      .then((data) => ({ layoutContent: data }));
  }
</script>

<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import Nav from "../components/nav.svelte";

  import { theme } from "../stores/theme";
  import { setThemeVariables } from "../utils/theme";

  let themeSubscription;

  onMount(() => {
    // import external and ss components
    // @ts-ignore
    import("@vanillawc/wc-markdown/themes/prism-okaidia.css");
    import("@vanillawc/wc-markdown/index");
    // @ts-ignore
    import("@mrsauravsahu/components/public/build/bundle");

    themeSubscription = theme.subscribe((theme) => {
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
    max-width: 80rem;
  }
</style>

<Nav content={layoutContent.nav} />
<main>
  <slot />
</main>
