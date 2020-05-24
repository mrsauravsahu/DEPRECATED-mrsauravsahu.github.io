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
    color: rgb(var(--ss-bg));
    cursor: pointer;
    font-weight: 900;
    font-size: calc(1 * var(--ss-base-font-size));
    filter: grayscale();
  }
</style>

<span on:click={handleThemeChange}>{nextThemeLabel}</span>
