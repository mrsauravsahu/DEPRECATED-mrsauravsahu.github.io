<script lang="ts">
  import { theme } from "../stores/theme";

  var utteranceRootElement: HTMLElement;

  theme.subscribe((currentTheme) => {
    if (utteranceRootElement) {
      const iFrameElement = utteranceRootElement.querySelector(
        "iframe.utterances-frame"
      ) as any;

      iFrameElement?.contentWindow.postMessage(
        { type: "set-theme", theme: `github-${currentTheme}` },
        "https://utteranc.es/"
      );
    }
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

<div class="utterance-root" bind:this={utteranceRootElement}>
  <script
    src="https://utteranc.es/client.js"
    repo="mrsauravsahu/portfolio-comments"
    issue-term="title"
    theme={`github-${$theme}`}
    crossorigin="anonymous"
    label="comments"
    async>
  </script>
</div>
