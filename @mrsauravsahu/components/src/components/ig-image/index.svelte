<script>
  import { onMount } from "svelte";

  export let src;
  export let message;

  let isClicked = false;
  let isImageLoaded = false;

  const onImageClicked = () => {
    isClicked = true;
  };

  onMount(() => {
    setTimeout(() => {
      const imageLoader = new Image();
      imageLoader.onload = () => {
        isImageLoaded = true;
      };
      imageLoader.src = src;
    }, 0);
  });
</script>

<style>
  .root {
    display: flex;
    flex-direction: column;
  }

  .message {
    position: relative;
    height: 100%;
    text-align: center;
    opacity: 0;
    transition: 0.2s linear;
    align-self: center;
    background-color: rgb(var(--ss-accent));
    color: rgb(var(--ss-bg));
    margin: 0.5rem;
    padding: 0.25rem 2rem;
    border-radius: 1rem;
    font-size: calc(0.75 * var(--ss-base-font-size));
  }

  .message--image-clicked {
    opacity: 1;
  }

  .image__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(45deg, rgb(249, 152, 72), rgb(197, 46, 145));
    padding: 0.2rem;
  }

  img {
    position: relative;
    width: calc(100% - 2 * 0.2rem);
    height: calc(100% - 2 * 0.2rem);
    border-radius: 50%;
    border: 0.2rem solid white;
  }
</style>

<svelte:options tag="ss-ig-image" />
{#if isImageLoaded}
  <div class="root">
    <!-- 
    TODO: Research how to fix alt prop in svelte 
    error: cannot read property match of null
  -->
    <div class="image__container">
      <img {src} alt="instagram style" on:click={onImageClicked} />
    </div>
    <div class:message class:message--image-clicked={isClicked}>{message}</div>
  </div>
{/if}
