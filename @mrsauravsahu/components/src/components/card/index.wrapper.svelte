<script>
  import Card from "./index.svelte";

  export let title, content;
</script>

<style>
  :global(#root) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .story-container {
    height: 50%;
    width: 50%;
  }
</style>

<div class="story-container">
  <Card {title}>
    <div>{content}</div>
  </Card>
</div>
