console.log("javascript working!"); // Just to test. 
var loadJSON = function() {
  $.get("http://www.reddit.com/hot.json", function(response) {
    // If you don't understand line 6, you may want to read up
    // on Javascript objects, in the slides or internet. 
    $("#list").empty();
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

var getWeather = function() {
  var NewHavenWeather = "http://api.openweathermap.org/data/2.5/weather?q=NewHaven,usa";
  $.get(NewHavenWeather, function(response) {
    var tempInK = response.main.temp;
    var tempInF = Math.floor((tempInK - 273)* 1.8) + " degrees F";
    alert(tempInF);
  });
}

$(document).ready(function() {
  $("#refresh-button").click(function() {
    loadJSON();
  });
  $("#weather-button").click(function() {
    getWeather();
  });
  
});

