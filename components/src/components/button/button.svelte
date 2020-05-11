<script>
  import { createEventDispatcher } from "svelte";

  export let text = "";

  const dispatch = createEventDispatcher();

  function onClick(event) {
    dispatch("click", event);
  }
</script>

<style>
  button {
    outline: none;
    border: var(--ss-border-width) solid rgb(var(--ss-bg));
    cursor: pointer;
    font-size: 1rem;
    padding: 1rem;
    font-weight: 800;
    border-radius: 2rem;

    color: rgb(var(--ss-bg));
    background-color: transparent;
  }

  button:focus,button:active{
    color: rgb(var(--ss-accent));   
    border: var(--ss-border-width) solid rgba(var(--ss-bg), 0.5);
    background-color: rgb(var(--ss-bg));
  }
</style>

<svelte:options tag="ss-button" />

<button on:click={onClick}>{text}</button>
