# Project for learning some git scraping!

The actual scraping happens in the GitHub Actions (`scrape.yml`).

The URL is specified in the GitHub Actions.

The `scrape.js` file is where you define what elements from the page you want, using CSS selectors

You can also run the scrape command like this from the command line:

```shot-scraper javascript \
          "URL" \
          -i scrape.js -o file.json```