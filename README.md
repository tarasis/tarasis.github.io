# rmcg.dev

Projects completed while working through various HTML/CSS/JavaScript things. Primarily focused on Frontend Mentor. Ultimately it will aim to be a portfolio site.

## Templating

Using [Eleventy](https://www.11ty.dev/) for templating purposes. Was getting silly, and indeed had potential for being error prone adding more and more html by hand for each challenge completed.

So I have spent a little time figuring out [Nunjucks](https://mozilla.github.io/nunjucks/)

## Other Things

Fedora and other SVG's came from

https://freesvg.org/red-fedora-reworked

License is public domain for the nicer of the Fedoras

Added basic website 5th Feb 2022

## Deployment

Self hosting repo on git.tarasis.net
After pushing updates, a post-receive hook builds and deploys the update for [Caddy](https://caddyserver.com) to serve.
