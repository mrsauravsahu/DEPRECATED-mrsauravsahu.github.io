<script>
  import { theme } from "../stores/theme";
  import { THEMES, getThemeLabelForTheme, getNextTheme } from "../utils/theme";

  let nextThemeLabel = getThemeLabelForTheme(getNextTheme($theme));

  const handleThemeChange = () => {
    var nextTheme = $theme == THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    nextThemeLabel = getThemeLabelForTheme($theme);
    theme.set(nextTheme);
  };
</script>

<style>
  span {
    cursor: pointer;
    font-size: 1.5rem;
    filter: grayscale();
  }
</style>

<span on:click={handleThemeChange}>{nextThemeLabel}</span>
