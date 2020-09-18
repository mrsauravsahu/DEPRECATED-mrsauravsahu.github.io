<script lang="ts">
  import { goto } from "@sapper/app";
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

  a {
    all: unset;
    width: 100%;
    cursor: pointer;
    margin: 1rem 0;
    min-height: 8rem;
  }

  ss-card {
    height: 100%;
  }
  @media only screen and (min-width: 48rem) {
    .cards-container > a {
      width: calc(50% - 1rem);
      height: 10rem;
    }
  }
</style>

<ss-title id="projects">--projects</ss-title>
<div class="projects-container content">
  <p>
    Here are a few of the projects I'm working on. Find out more on Github...
  </p>
  <div class="cards-container">
    <a href='https://github.com/mrsauravsahu/cli-config'>
      <ss-card title="cli-config">
        Helping you setup your CLI experience easily. Some goodies for the ol' terminal.
      </ss-card>
    </a>
    <a href='https://github.com/mrsauravsahu/gitremotetourl'>
      <ss-card title="git-remote-to-url">
        Converts git's remote url to a valid url to open in the browser.
      </ss-card>
    </a>
    <a  href='https://github.com/mrsauravsahu/towerofhanoi'>
      <ss-card title="TowerOfHanoi">
        Cross platform Tower of Hanoi game using GLUT for Windows and freeglut
        for Linux and Mac.
      </ss-card>
    </a>
    <a href='https://github.com/mrsauravsahu/mrsauravsahu.github.io'>
      <ss-card title="portfolio">
        You're on that side right now! A little site that tells the world who I am.
      </ss-card>
    </a>
  </div>
</div>
