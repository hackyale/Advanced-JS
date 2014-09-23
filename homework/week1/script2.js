console.log("javascript working!");

 // Just to test. 
$(document).ready(function() {
    $("#refresh-button").click(function() {
      $("#list").empty();
      console.log("refreshed!");
      window.location.reload();
      });
  $.get("https://api.instagram.com/v1/tags/search?q=snowy&access_token=1507558611.d8a3de1.1390d45eb8754206a04dc586b824700b", function(response) {
    // If you don't understand line 6, you may want to read up
    // on Javascript objects, in the slides or internet. 
    var catPicture = response.data.children;
    for(var i in pictures) {
      picture = pictures[i].data;
      var cat = $("<li><img></li>")
        .find("img")
        .attr("src", picture.images.standard_resolution.url)
        .attr("alt", "cats")
        .end();
      //var upVotes = $("<li>" + story.ups + " upvotes" + "</li>");
      // Your code here:
      // In the data in the Javascript object 'story',
      // find the title, permalink, and upvote count
      // Then create HTML elements with jQuery (like in line 9)
      // and append them to the #list element. 
      $("#list").append(cat,"<br>");
      // Look at the JS console in Chrome to see what story looks like
      console.log(story);


    }
  })
});