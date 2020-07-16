<script>
  import { createEventDispatcher } from "svelte";

  import Button from "./index.svelte";

  export let data;

  const dispatch = createEventDispatcher();
  function onClick(event) {
    dispatch("click", event);
  }
</script>

<Button on:click={onClick}>
  {@html data}
</Button>
