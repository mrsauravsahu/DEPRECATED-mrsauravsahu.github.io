<script>
    export let projects;
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

<ss-title id="highlights">--highlights</ss-title>
<div class="projects-container content">
    <p>
        First, here are a few of the projects that I'm working on. You can find
        more about them on Github, be sure to give a star if you like it :) I
        will be pinning some important links and combining the socials section
        here.
    </p>
    <div class="cards-container">
        {#each projects as project}
            <a href={project.url}>
                <ss-card title={project.title}>{project.description}</ss-card>
            </a>
        {/each}
    </div>
</div>
