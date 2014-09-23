console.log("javascript working!"); // Just to test. 
var loadJSON = function() {
  $("#list").empty();
  $.get("http://www.reddit.com/hot.json", function(response) {
    // If you don't understand line 6, you may want to read up
    // on Javascript objects, in the slides or internet. 
    var stories = response.data.children;
    for(var i in stories) {
      story = stories[i].data;
      var elem = $("<li></li>");
      elem.html("Title: " + story.title + "permalink: " + story.permalink + "upvote count: " + story.ups);

      // Your code here:
      // In the data in the Javascript object 'story',
      // find the title, permalink, and upvote count
      // Then create HTML elements with jQuery (like in line 9)
      // and append them to the #list element. 
      $("#list").append(elem);
      // Look at the JS console in Chrome to see what story looks like
      console.log(story);
    }
  });
}

var loadWhiteHouse = function() {
  var whitehousePetitionsJSON = "https://api.whitehouse.gov/v1/petitions.json?limit=3&offset=0&createdBefore=1352924535";
  $.get(whitehousePetitionsJSON, function(response) {
    console.log("working link");
  })
}

$(document).ready(function() {
  $("#refresh-button").click(function() {
    loadJSON();
  });
  $("#petition-button").click(function() {
    loadWhiteHouse();
  });
  
});

