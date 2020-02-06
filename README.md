# newsScraper

## Overview

This app is designed to scrape the Star Wars news blog (https://www.starwars.com/news), save the results to a Mongo db, and display the results (Article Title + link) with the option to add a comment on a selected article.

The following npm packages were used in the development of the app:
* express
* morgan
* mongoose
* express-handlebars
* axios
* cheerio

## App Logic

Upon loading the main index page, the user will need to click the "scrape" button to scrape the information from the blog url. Using cheerio, earch article header (h2) is captured along with a link to the article. That information is then stored as an article in the database.

Once the information has been scraped and stored, the results are read from the db and displayed in the left column. When the user clicks on an article, a comment field (title and body) are displayed in the right column. When the 'save comment' button is clicked, the comment is posted and saved as an object within the Article object, and the comment field is hidden.

If the user were to click on the same article and a comment had been previously saved to that article, the comment data is called through a GET method and the saved comment title and body are diplayed. The user can then updated their comment or click the "nevermind" button to hide the comment field.

## Notes

* Future Development: I would like to update the front end for a better UI/UX and cleaner look.