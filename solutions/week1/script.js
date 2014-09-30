$(document).ready(function() {
  $.get("http://www.reddit.com/hot.json", function(response) {
    var stories = response.data.children;
    for(var i in stories) {
      story = stories[i].data;
      var elem = $("<li></li>");
      $(elem).append("<p>");
      $(elem).append("<a href='http://reddit.com" + story.permalink +
        "'>" + story.title + "</a>");
      $(elem).append(" (" + story.score + "points)</p>");
      $(elem).append("<img src='" + story.thumbnail + "'>");
      $("#list").append(elem);
      console.log(stories[i]);
    }
  })
});