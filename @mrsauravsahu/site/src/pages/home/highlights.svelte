<script lang="ts">
  import { PfCard, PfHeader } from "@propfull/kit";
  export let projects;
  export let theme;
</script>

<style>
  .projects-container > div {
    margin-bottom: 1rem;
  }

  .cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .highlight {
    all: unset;
    width: 100%;
    cursor: pointer;
    margin: 0.5rem 0;
  }

  .title {
    padding: 0;
    font-size: 1.5rem;
  }

  .title,
  .project-content {
    padding: 0 1rem;
  }

  .project-content {
    padding-bottom: 2rem;
  }

  @media only screen and (min-width: 48rem) {
    .cards-container > a {
      width: calc(50% - 1rem);
    }
  }
</style>

<ss-title id="highlights">--highlighted-projects</ss-title>
<div class="projects-container ss-content">
  <p>
    First, here are a few of the projects that I'm working on. You can find more
    about them on Github, be sure to give a star if you like it :) I will be
    pinning some important links and combining the socials section here.
  </p>
  <div class="cards-container">
    {#each projects as project}
      <a class="highlight" href={project.url}>
        <PfCard {theme}>
          <div class="title" slot="title">
            <PfHeader type="h3" theme="dark">{project.title}</PfHeader>
          </div>
          <div class="project-content" slot="content">
            {project.description}
          </div>
        </PfCard>
      </a>
    {/each}
  </div>
</div>
