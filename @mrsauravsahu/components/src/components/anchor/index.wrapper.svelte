<script>
  import Anchor from "./index.svelte";

  export let data, href, underline;
</script>

<Anchor {href} {underline}>
  {@html data}
</Anchor>
