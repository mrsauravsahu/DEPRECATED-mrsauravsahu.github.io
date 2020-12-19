<script lang="ts" context="module">
  export async function preload(page) {
    let pageNumber = Number(page.params.page)
    pageNumber = Number.isNaN(pageNumber) ? 1 : pageNumber
    
    const response = await this.fetch('/blog.json');
    const data = await response.json();

    const lastPage = Math.floor(data.totalCount  / 6 ) + (data.totalCount  % 6 === 0 ? 0 : 1)
    let startIndex = 6 * (pageNumber - 1)
    let currentPageBlogs = data.blogs.slice(startIndex, startIndex + 6)

    return {...data, currentPage: pageNumber, lastPage, blogs: currentPageBlogs};
  }
</script>

<script lang="ts">
  import { DateTime, Duration } from "luxon";
  import { PfHeader, PfCard, PfButton } from "@propfull/kit";

  export let blogs;
  export let count;
  export let totalCount;
  export let currentPage;
  export let lastPage;
</script>

<style>
  .posts-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .page-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  li {
    list-style-type: none;
    text-decoration: none;
    margin-bottom: 2rem;
    width: 100%;
    min-height: 12rem;
  }

  ul a {
    all: unset;
    cursor: pointer;
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  .title,
  .content {
    padding: 0 1rem;
  }

  :global(.blogs .title h1) {
    margin-top: 0;
  }

  .blog-meta > h4 {
    display: inline;
  }

  .blog-meta {
    margin: 1rem 0;
  }

  hr {
    background-color: rgb(62, 64, 80);
    height: calc(1rem / 16);
    border: none;
  }

  @media only screen and (min-width: 48rem) {
    li {
      width: calc(50% - 1rem);
    }
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="container blogs" >
  <div class="ss-content">
    <PfHeader theme='dark' type='h2'>--blog</PfHeader>
    <p>
      Here are a few thoughts that I thought should be written down... The old
      blogs have also been imported here. If they don't look alright, just give
      me shoutout on Twitter, will check it out.
    </p>
    <ul class="posts-container">
      {#each blogs as blog}
        <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
        <li>
          <a rel="prefetch" href="posts/{blog.id}">
            <PfCard theme="dark">
              <div slot="title" class="title">
                <PfHeader theme="dark">{blog.title}</PfHeader>
              </div>
              <div slot="content" class="content">
                <hr />
                <div class="blog-meta">
                  <h4>{DateTime.fromISO(blog.createdAt).toRelative()}</h4>
                  •
                  <h4>
                    {#if Duration.fromISO(blog.approxTimeToRead).minutes <= 1}
                      less than a minute
                    {:else}
                      {`${Duration.fromISO(blog.approxTimeToRead).minutes} minutes`}
                    {/if}
                  </h4>
                  <h4>read</h4>
                </div>
                {#if blog.description}{blog.description}{/if}
              </div>
            </PfCard>
          </a>
        </li>
      {/each}
    </ul>
    <div class='page-container'>
      {#if currentPage !== 1}
      <a href={`/blog/${currentPage - 1}`}>
        <PfButton theme='dark' disabled={currentPage === 1}>{'<'}</PfButton>
      </a> 
      {/if}
      &nbsp; {currentPage} of {lastPage} &nbsp;	
      {#if currentPage !== lastPage}
      <a href={`/blog/${currentPage + 1}`}>
        <PfButton theme='dark' disabled={currentPage === lastPage}>{'>'}</PfButton>
      </a>
      {/if}
    </div>
  </div>
</div>
