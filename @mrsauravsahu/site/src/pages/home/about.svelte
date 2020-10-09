<script lang="ts">
  import Theme from "../../components/theme.svelte";
</script>

<style>
  @media only screen and (min-width: 48rem) {
    .about-container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  .about-container {
    flex-direction: column;
    justify-content: center;
  }

  .about-photo-container {
    display: flex;
    flex-direction: column;
  }

  .about-photo-container {
    cursor: pointer;
    width: 100%;
    max-width: 14rem;
    margin: 0 auto;
    margin-top: 1rem;
  }
</style>

<div class="container">
 
  <div class="about-container">
    <div class="about-photo-container">
      <ss-ig-image src="me.jpg" message="made you click 😂" />
    </div>
  </div>
</div>
