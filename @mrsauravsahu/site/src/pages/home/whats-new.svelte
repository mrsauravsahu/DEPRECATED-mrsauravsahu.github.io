<script>
    import { DateTime } from "luxon";

    export let latestBlog;
</script>

<style>
    a {
        all: unset;
        cursor: pointer;
    }

    a:visited {
        color: unset;
    }

    hr {
        border-left: none;
        border-bottom: none;
        border-right: none;
        border-top-width: 0.0625rem;
    }
</style>

<ss-title>--whats-new</ss-title>
<div class="ss-content">
    <p>
        So here's what's up. This section has all the latest things I have got
        going. From blogs to latest YouTube videos, to pinned links... they're
        all here.
        <span class="note">
            (or will be here... small note: This section is still being worked
            on... hehe, sorry, ok, that's all.)
        </span>
    </p>

    <hr />
    <h6>
        Latest blog post -
        {DateTime.fromISO(latestBlog.createdAt).toFormat('EEEE, MMMM dd yyyy')}
    </h6>
    <a href={`blog/${latestBlog.id}`}>
        <h2>{latestBlog.title}</h2>
        <p>{latestBlog.description}</p>
    </a>
</div>
