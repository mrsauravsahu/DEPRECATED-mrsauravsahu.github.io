<svelte:options tag="ss-button" />

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
    border: var(--ss-border-width) solid rgb(var(--ss-accent));
    cursor: pointer;
    font-size: 1rem;
    padding: 0.75rem 1rem;
    font-weight: 800;
    border-radius: var(--ss-border-width);
    color: rgb(var(--ss-accent));
    background-color: transparent;
    transition: 0.1s linear;
  }

  button:focus,
  button:active,
  button:hover {
    color: rgb(var(--ss-bg));
    border: var(--ss-border-width) solid rgba(var(--ss-accent), 0.5);
    background-color: rgb(var(--ss-accent));
  }

  button:active {
    transform: translateY(0.25rem);
  }
</style>

<button on:click={onClick}>{text}</button>
