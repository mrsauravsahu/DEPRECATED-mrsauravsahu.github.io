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
    <div class="content">
      <p>Digital consultant and full stack engineer at Digital McKinsey.</p>
      <p>
        Fascinated about how things work, learning algorithms and how they’re
        used to solve real world problems. I create web and mobile applications
        ready for use in our every-day lives.
      </p>
      <p>
        On the server side of things, I use ASP .NET Core and Node to create
        APIs. On the browser, it's mainly React to create web applications;
        React Native and Xamarin.Forms to create mobile applications.
      </p>
      <p>
        Learning is a constant here, and currently, I’m learning Svelte to
        increase my frontend skills and delving into the Cloud with Microsoft
        Azure.
      </p>
    </div>
  </div>
</div>
