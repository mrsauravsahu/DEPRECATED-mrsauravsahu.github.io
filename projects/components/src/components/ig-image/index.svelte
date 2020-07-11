<script>
  export let src;
  export let message;

  let isClicked = false;

  const onImageClicked = () => {
    isClicked = true;
  };
</script>

<style>
  .message {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    opacity: 0;
    transition: 0.2s linear;
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
<div>
  <!-- 
    TODO: Research how to fix alt prop in svelte 
    error: cannot read property match of null
  -->
  <div class="image__container">
    <img {src} alt="instagram style" on:click={onImageClicked} />
  </div>
  <div class:message class:message--image-clicked={isClicked}>{message}</div>
</div>
