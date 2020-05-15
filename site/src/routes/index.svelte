<style>
  .tech-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .about-container {
    display: flex;
    flex-direction: row;
    padding: 2rem 0;
    align-items: center;
  }

  .about-photo-container > img {
    width: 100%;
    border-radius: 50%;
  }

  .about-me {
    margin: 0 4rem;
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<ss-title>--saurav-sahu</ss-title>
<div class="tech-container">
  <ss-bubble text="react" />
  <ss-bubble text="svelte" />
  <ss-bubble text=".net core" />
  <ss-bubble text="docker" />
  <ss-bubble text="typescript" />
  <ss-bubble text="azure" />
  <ss-bubble text="node" />
  <ss-bubble text="react native" />
</div>

<div class="about-container">
  <div class="about-photo-container">
    <img src="me.jpg" alt="Saurav Sahu" />
  </div>
  <div class="about-me">
    <p>
      Digital consultant and full stack engineer at Digital McKinsey. Fascinated
      about how things work. I really like learning algorithms and how they’re
      used to solve real world problems. I create web and mobile applications
      ready for use in our every-day lives. On the client side of things, I use
      React to create web applications; React Native and Xamarin.Forms to create
      mobile applications. On the server, I use ASP .NET Core and Node to create
      APIs. Learning is a constant here, and currently, I’m learning Svelte to
      increase my frontend skills and delving into Cloud with Microsoft Azure.
    </p>
  </div>
</div>
