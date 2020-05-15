<script>
  import Card from "./index.svelte";

  export let title, content;
</script>

<Card>
  <div slot="title">{title}</div>
  <div slot="content">{content}</div>
</Card>
