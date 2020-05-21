<script>
  import Theme from "../../components/theme.svelte";
</script>

<style>
  @media only screen and (min-width: 48rem) {
    .about-container {
      display: flex;
      flex-direction: row;
      padding: 2rem 0;
      align-items: center;
    }

    .about-me {
      margin: 0 4rem;
    }
  }

  .about-container {
    flex-direction: column;
    justify-content: center;
  }

  .tech-container {
    display: flex;
    width: 100%;
    justify-content: safe;
    flex-wrap: wrap;
  }

  .tech-container > * {
    margin: 0.25rem;
  }

  .about-photo-container {
    display: flex;
    flex-direction: column;
  }

  .about-photo-container > img {
    width: 100%;
    max-width: 20rem;
    margin: 2rem 0;
    border-radius: 50%;
    place-self: center;
  }

  .title-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
</style>

<div class="container">
  <div class="tech-container">
    <ss-bubble text=".net core" />
    <ss-bubble text="svelte" />
    <ss-bubble text="typescript" />
    <ss-bubble text="docker" />
    <ss-bubble text="node" />
    <ss-bubble text="azure" />
    <ss-bubble text="react native" />
    <ss-bubble text="react" />
  </div>
  <div class="about-container">
    <div class="about-photo-container">
      <img src="me.jpg" alt="Saurav Sahu" />
    </div>
    <div class="about-me">
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
