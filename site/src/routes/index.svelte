<script>
  import { onDestroy, onMount } from "svelte";

  import About from "../pages/home/about.svelte";
  import Projects from "../pages/home/projects.svelte";
  import Socials from "../pages/home/socials.svelte";

  import { theme } from "../stores/theme";
  import { setThemeVariables, THEMES } from "../utils/theme";

  let currentTheme, themeSubscription;

  onMount(() => {
    themeSubscription = theme.subscribe(theme => {
      currentTheme = theme;

      // Update CSS variables
      setThemeVariables(theme);
    });
    
    onDestroy(themeSubscription);
  });

  const toggleTheme = () => {
    const nextTheme = currentTheme == THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    theme.set(nextTheme);
  };
</script>

<svelte:head>
  <title>Saurav Sahu</title>
</svelte:head>

<ss-button on:click={toggleTheme} text="toggle theme" />

<About />
<Projects />
<Socials />
