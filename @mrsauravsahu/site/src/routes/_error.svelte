<script lang="ts">
  import { PfHeader } from "@propfull/kit";

  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<section class="ss-section">
  <PfHeader theme="dark">{status}</PfHeader>

  {#if dev && error.stack}
    <h3>{error.name}: {error.message}</h3>
    <pre>{error.stack}</pre>
  {/if}
</section>
