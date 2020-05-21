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

  export let segment;
</script>

<Nav {segment} />
<main>
  <slot />
</main>
