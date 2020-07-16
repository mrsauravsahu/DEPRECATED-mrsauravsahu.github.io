<script>
  import Anchor from "./index.svelte";

  export let data, href;
</script>

<Anchor {href}>
  {@html data}
</Anchor>
