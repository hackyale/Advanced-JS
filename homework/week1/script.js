console.log("javascript working!"); // Just to test. 
$(document).ready(function() {
  $.get("http://www.reddit.com/hot.json", function(response) {
    // If you don't understand line 6, you may want to read up
    // on Javascript objects, in the slides or internet. 
    var stories = response.data.children;
    for(var i in stories) {
      story = stories[i].data;
      var elem = $("<li></li>");
      // Your code here:
      // In the data in the Javascript object 'story',
      // find the title, permalink, and upvote count
      // Then create HTML elements with jQuery (like in line 9)
      // and append them to the #list element. 
      $(elem).html(
        story.title +
        "<ul><li>Permalink: " + story.permalink + "</li>" +
        "<li>Ups: " + story.ups + "</li></ul>"
        );
      $("#list").append(elem);
      // Look at the JS console in Chrome to see what story looks like
      console.log(story);
    } 

    
  });

  $("#refresh-button").click(function() {
    $("h1").text("Top Reddit Stories:")
    $("#list").empty();

    $.get("http://www.reddit.com/hot.json", function(response) {
    var stories = response.data.children;
    for(var i in stories) {
      story = stories[i].data;
      var elem = $("<li></li>");
      $(elem).html(
        story.title +
        "<ul><li>Permalink: " + story.permalink + "</li>" +
        "<li>Ups: " + story.ups + "</li></ul>"
        );
      $("#list").append(elem);
      console.log(story);

    } 
    });

  });

    $("#news-button").click(function() {
    $("h1").text("Top NYTimes Stories:")
    $("#list").empty();

    $.get("http://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&sort=newest&api-key=8f037cc382c1e2aa3befeaa49f760cff:3:69729056", function(response) {

    var stories = response.response.docs;
    console.log(stories);
    for(var i in stories) {
      story = stories[i];
      var elem = $("<li></li>");
      $(elem).html(
        story.headline.main +
        "<ul><li>" + story.byline.original + "</li>" +
        "<li>" + story.snippet + "</li></ul>"
        );
      $("#list").append(elem);
      console.log(story);
    } 
    });
  });
}
 
);

