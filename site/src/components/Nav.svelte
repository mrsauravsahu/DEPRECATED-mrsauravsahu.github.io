<script>
  export let segment;
</script>

<style>
  nav {
    margin: 0 auto;
    padding: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    flex-wrap: wrap;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
  }

  a:first {
    width: 100%;
  }

  ss-title {
    display: inline;
  }
</style>

<nav>
  <a aria-current={segment === undefined ? 'page' : undefined} href=".">
    <ss-title>./saurav-sahu</ss-title>
  </a>

  <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
  <a
    rel="prefetch"
    aria-current={segment === 'blog' ? 'page' : undefined}
    href="blog">
    blog
  </a>
</nav>
