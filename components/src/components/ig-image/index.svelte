<script>
  import classnames from "classnames";
  export let src;
  export let message;

  let isClicked = false;

  const onImageClicked = () => {
    isClicked = true;
  };
</script>

<style>
  .container {
    border: 1px solid red;
  }

  .message {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    opacity: 0;
  }

  .message--image-clicked {
    opacity: 1;
  }

  img {
    position: relative;
    width: 100%;
    border-radius: 50%;
  }
</style>

<svelte:options tag="ss-ig-image" />
<div class="container">
  <!-- 
    TODO: Research how to fix alt prop in svelte 
    error: cannot read property match of null
  -->
  <img {src} alt="instagram style" on:click={onImageClicked} />
  <div
    class={classnames({ message: true, 'message--image-clicked': isClicked })}>
    {message}
  </div>
</div>
