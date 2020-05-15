<script>
  import Card from "./index.svelte";

  export let title, content;
</script>

<Card {title}>
  <div>{content}</div>
</Card>
