<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "../stores/theme";

  import {
    THEMES,
    getThemeLabelForTheme,
    getNextTheme,
    getCSSVariableForTheme,
    getCurrentSavedTheme,
    saveTheme,
  } from "../utils/theme";

  let nextThemeLabel = getThemeLabelForTheme(getNextTheme($theme));

  const handleThemeChange = () => {
    var nextTheme = $theme == THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    nextThemeLabel = getThemeLabelForTheme($theme);
    theme.set(nextTheme);
  };

  onMount(() => {
    const currentTheme = getCurrentSavedTheme();

    theme.set(currentTheme);
    nextThemeLabel = getThemeLabelForTheme(getNextTheme(currentTheme));
  });
</script>

<style>
  .container {
    width: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  span {
    color: rgb(var(--ss-bg));
    cursor: pointer;
    font-weight: 900;
    font-size: calc(1 * var(--ss-base-font-size));
    filter: grayscale();
  }
  svg {
    transition: height 0.2s var(--transition-fn);
    height: 0;
    position: absolute;
  }

  @media (hover: hover) {
    .container:hover > svg {
      height: 3rem;
    }

    .container:active > svg,
    .container:focus > svg {
      height: 4rem;
    }
  }
</style>

<div class="container">
  <svg
    viewBox="0 0 100 100"
    style={`fill: rgb(${getCSSVariableForTheme(getNextTheme($theme), '--ss-bg')})`}>
    <circle cx="50" cy="50" r="50" />
  </svg>
  <span
    on:click={handleThemeChange}
    data-label={nextThemeLabel}
    on:contextmenu|preventDefault={() => saveTheme($theme)}>
    {nextThemeLabel}
  </span>
</div>
