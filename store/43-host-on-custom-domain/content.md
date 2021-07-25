From hosting this website for a couple of years on Blogger, to moving to WordPress for a few years, to having it open on Github Pages, I learnt a lot.

It was probably in college - I didn't know much about programming and the web - when I started this blog for the sole purpose of documenting what I was up to. It was stressful at the beginning, difficult to keep up with college chores, learning and also documenting the same thing in writing. If you check out the older posts - they're mostly about me just trying to get through college 😂. But as I slowly learnt about Web Development and programming in general, I understood the power that was bestowed upon me. It was suddenly fun and exciting - I could build a lot of new things - at least on the web.

It's been a journey, and today is the next chapter. After thinking about it for so long, I've finally moved to a custom domain for this site. I'm not going to write the exact address anywhere, because I know for sure I'll change it in the future. So, I don't want to create extra work for myself. 😂

## So why did I do it?

Well, it's always great to see just a clean domain name, for one. The old one had my name, but it clearly showed it's hosted through Github Pages.

Secondly, I wanted to see how to do it. 

That's pretty much it.

## So how did I do it? And what did I learn in the process?

So let's talk about how to do it. The only thing I paid for and bought, is a domain. No hosting, no SSL certificate. Github Pages will help with both of those.

### 1. Buy a domain

There are a gazillion number of websites that sell domain names. I went with one, randomly. hehe, mainly I saw a great deal for a year and bought it. So, you know next year this domain might change.

So I bought only the domain name (check the browser URL to see what domain I bought - might've changed when you read this 😂)

For the sake of an example, let's just say I bought <strong>whataweirddomainlel.com</strong>

### 2. Configure your DNS

On the website where you bought your domain, you'll get a basic interface to update DNS entries. 

If you don't know, DNS, or a Domain Name Server is a cache that stores pointers from a domain name (eg. [mrsauravsahu.github.io](https://mrsauravsahu.github.io) to its IP Address)

There are various types of DNS records, let's see what we need to configure to get this working...

#### 2.1 Add an A record

An <strong>A record</strong> (an Address record) is a type of record that points a domain name to an IP Address.
So add an <strong>A Record</strong> pointing whataweirddomainlel.com to the IP Address of Github Pages, where your site is hosted. 
You can find the Github Pages' IP Address [here](https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)

This maps your Apex domain (your naked domain <strong>whataweirddomainlel.com</strong> to Github Pages' IP Address)

This helps users visit your site without the <strong>www</strong> subdomain.

#### 2.2 Add a CNAME record

Since some people (should I say it, the word?) still use the <strong>www</strong> subdomain, when visiting websites, we'll have to redirect them to our Apex domain.

So we add a <strong>CNAME record</strong>, which maps one domain to another domain. And you must've guessed it, we need to map <strong>www.whataweirddomainlel.com</strong> to <strong>whataweirddomainlel.com</strong>

#### 2.3 Wait and check if your DNS records Propagated

Now hastily keep checking websites like [https://www.whatsmydns.net/](https://www.whatsmydns.net/), [https://dnsmap.io/](https://dnsmap.io/), and use the `dig` command to check if your DNS records propagated throughout the World. 😂

After waiting for an eternity, took me a day, you should see your DNS records propagated throughout the world.

#### 2.4 Tell Github Pages - I need a custom domain!

Go to the settings on the repository where the site is on Github. In the section for Github Pages, write the custom domain. 

Wait for Github to check if you've configured your DNS records correctly. Once Github verifies that you've added the <strong>A record</strong> properly, you'll be able to check the tick-box saying enforce HTTPS.

Now you have both HTTPS and a custom domain!

This was a lot of fun and I finally have a custom domain. <strong>#LearningNeverStops</strong> Comment what is your website's link? You can reach out to me - well, anywhere, checkout my [contacts page](/socials).