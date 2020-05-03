<svelte:options tag="ss-button" />

<button class="button" on:click={onClick}>
    {text}
</button>

<style>
    .button {
      border: 1px solid #eee;
      border-radius: 3px;
      background-color: #FFFFFF;
      cursor: pointer;
      font-size: 15px;
      padding: 3px 10px;
      margin: 10px;
      font-weight: 900;
    }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  
  export let text = '';

  const dispatch = createEventDispatcher();

  function onClick(event) {
    dispatch('click', event)
  }
</script>
