## Advanced JS: Homework 1

**Estimated time: 60 mins. See the class page for how to submit.**  
**Due Tuesday, Sep. 23 at 2pm**

#### Part 1: Reddit Hot Stories

Use the template files in the `week1` directory to pull the top stories from Reddit and show them on your screen.

#### Part 2: Refresh!

Add a refresh button that rerenders your screen. Your button should not just refresh the page; it should clear the `<ul id="list"></ul>` and repopulate it.  
Hint:

    <!-- index.html -->
    <button id="refresh-button">Refresh</button>

    // script.js
    $("#refresh-button").click(function() {
      ...
    });

#### Part 3: More Data!

Pick some other API on the internet and render data from there. An idea if you can't find your own:

- [The US Petition API](https://petitions.whitehouse.gov/developers): some really moving and outright ridiculous petitions in motion now.

#### Part 4 (stretch): NDV3.js

[D3.js](http://nvd3.org/) is an immensely popular framework that allows you to make really cool charts very easily. Browse the documentation, and figure out how to get the upvote count to render as a circle with radius proportional to the upvote count (that is, more popular stories will have larger circles).