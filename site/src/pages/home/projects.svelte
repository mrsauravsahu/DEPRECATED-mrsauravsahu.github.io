<script>
  import { goto } from "@sapper/app";
</script>

<style>
  .projects-container > div {
    margin-bottom: 1rem;
  }

  button {
    all: unset;
    width: 100%;
    cursor: pointer;
  }
</style>

<div class="projects-container">
  <ss-title>--projects</ss-title>
  <div>
    <button on:click={() => goto('https://github.com/mrsauravsahu/gitremotetourl')}>
      <ss-card title="git-remote-to-url">
        Converts git's remote url to a valid url to open in the browser.
      </ss-card>
    </button>
  </div>
  <div>
    <button on:click={() => goto('https://github.com/mrsauravsahu/towerofhanoi  ')}>
    <ss-card title="TowerOfHanoi">
      <p>
        Cross platform Tower of Hanoi game using GLUT for Windows and freeglut
        for Linux and Mac.
      </p>
    </ss-card>
    </button>
  </div>
  <div>
    <button on:click={() => goto('https://github.com/mrsauravsahu/mrsauravsahu.github.io')}>
    <ss-card title="portfolio">
      <p>A little site that tells the world who I am.</p>
    </ss-card>
    </button>
  </div>
</div>
