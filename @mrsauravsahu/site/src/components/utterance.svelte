<script lang="ts">
  import { onMount } from "svelte";
  import { theme } from "../stores/theme";

  var utteranceRootElement: HTMLElement;

  onMount(() => {
    theme.subscribe((currentTheme) => {
      
      if (utteranceRootElement) {
        // clear old script
        utteranceRootElement.innerHTML = "";

        // add new utterances script
        var utteranceScript = document.createElement("script");
        utteranceScript.src = "https://utteranc.es/client.js";
        utteranceScript.setAttribute("repo", "mrsauravsahu/portfolio-comments");
        utteranceScript.setAttribute("issue-term", "title");
        utteranceScript.setAttribute("label", "comments");
        utteranceScript.setAttribute("theme", `github-${currentTheme}`);
        utteranceScript.setAttribute("crossorigin", "anonymous");
        utteranceScript.async = true;

        // append the new script with updated theme
        utteranceRootElement.appendChild(utteranceScript);
      }
    });
  });
</script>

<style>
  .utterance-root :global(.utterances) {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: unset;
  }
</style>

<div class="utterance-root" bind:this={utteranceRootElement} />
