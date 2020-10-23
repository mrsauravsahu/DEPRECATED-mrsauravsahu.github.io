<script lang="ts" context="module">
  export async function preload({ params }) {
    const { blogId } = params;
    const response = await this.fetch(`blog/${blogId}.json`);
    const data = await response.json();
    return data;
  }
</script>

<script lang="ts">
  import { DateTime, Duration } from "luxon";
  import Utterance from "../../../components/utterance.svelte";
  export let blog;

  const blogUrl = `blog/${blog.id}/file`;

  const duration = Duration.fromISO(blog.approxTimeToRead);
  const durationText = duration.minutes <= 1 ? 'less than a minute' : `${duration.toFormat('m')} minutes`;
</script>

<style>
  .prefix {
    font-weight: 100;
  }

  wc-markdown :global(:not(pre) > code) {
    background-color: rgb(var(--ss-accent));
    padding: 0.1rem 0.5rem;
    color: rgb(var(--ss-bg));
  }

  wc-markdown :global(pre) {
    font-size: var(--ss-base-font-size);
    font-family: "Courier New", Courier, monospace;
  }

  wc-markdown :global(a) {
    color: rgb(var(--ss-accent));
    font-weight: 800;
  }

  wc-markdown :global(img) {
    max-width: 100%;
    margin-bottom: 0.5rem;
    display: block;
  }
</style>

<svelte:head>
  <title>{blog.title}</title>
</svelte:head>

<div class="content">
  <h1>{blog.title}</h1>
  <h4>
    <span class="prefix"> Published on </span>
    {DateTime.fromISO(blog.createdAt).toFormat('EEEE, MMMM dd yyyy')}
    •
    {durationText}
    <span class="prefix">read</span>
  </h4>
  <ss-anchor href={blogUrl}>🔽 download raw</ss-anchor>
  <!-- TODO: fix crawling without this extra anchor tag -->
  <a href={blogUrl} />
  <wc-markdown src={blogUrl} highlight />
  <!-- TODO: Theme switching without reloads -->
  <Utterance />
</div>
