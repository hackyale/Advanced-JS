// Using the jQuery .ready() function!
$(document).ready(function() {
  loadReddit();
  $("#refresh").click(function() {
    // Ex. 1: Refresh Refresher code here
    // Hint: it's one line. 
    // ...
  });

  $(window).mousemove(function(e) {
    // Ex. 3: My Shadow code here

    // You can change the css of an element with the .css function—
    //   look up the documentation for it on jQuery.com!
    // $("#follow-dot").css({ ... });
    // console.log(e.pageX, e.pageY); // Just to see what's going on. 
    // Optionally, add a delay. Hint: look up the setTimeout function!
  });

  getFB(); // Defined below
});

// Ex. 2: Objectify Me code here
// An example person
// var rafi = {
//   fname: ...
//   lname: ...
//   favoriteCereal: ...
//   interests: ... 
//   fullname: function() {
//     // Make sure to use `this`
//     // return ...
//   },
//   miniBio: function() {
//     toPrint = "Hi my name is " + ...
//     // "toPrint += X" is a shortcut for "toPrint = toPrint + X"
//     toPrint += " and my favorite cereal is " + ...
//     toPrint += "In my free time, I like to ";
//     for (var i in this.interests) {
//       toPrint += ...
//     }
//     console.log(toPrint);
//     return toPrint;
//   }
// }

// Gets data from Reddit
var loadReddit = function() {
  console.log("loading hottest stories...");
  $.get("http://www.reddit.com/hot.json", function(response) {
    $("#list").empty(); // Empty all the stuff in the list first.
    var stories = response.data.children;
    for(var i in stories) { // For each story
      story = stories[i].data; // Get the actual object of the story
      var elem = $("<li></li>"); // Create an empty list element
      // Create a link inside a paragraph
      $(elem).append("<p><a href='http://reddit.com" + story.permalink +
        "'>" + story.title + "</a> (" + story.score + "points)</p>");
      // Add the story thumbnail as an <img> tag
      $(elem).append("<img src='" + story.thumbnail + "'>");
      // Add the newly created element to the list
      $("#list").append(elem);
    }
  });
};

// Ex 4: Me online! Code here
// Get data from Facebook
var getFB = function() {
  $.ajax({
    method: "get", // Using GET
    url: "https://graph.facebook.com/me", // Get my own info
    data: {
      fields: "...", // What goes here? 
      // Access token obtained at https://developers.facebook.com/tools/explorer
      // Note that it expires after a while, so you occasionally need to go back
      //   and get another one. 
      access_token: "CAACEdEose0cBAK0ILXnxSN8TSvCqvKtFroh7vzMzB7tZBL00z9hneo0g1AusC1NkUtVnBo8pW51GdKn26YoNFqtLeuBc849SusuUzxZCxyDvB2gjFI2iZCmpeYngbvajE610H7R8buek4ZBBLynQ2ARPiHndjQrfLCBnhyqZAAtuJp7L0ubaijFkgyg7p1GH9h8UA68Kj1ZBXVaCQ1p0xC"
    },
    success: function(response) {
      console.log(response);
      // Write code to display the name and userID on the page here.
      // If you got the profile picture, make it show up in an <img> tag
    }, 
    error: function(jxqr, text) {
      console.log(jxqr, text);
      // Error handling is a big part of coding, and we all know website that
      // show you no (or even worse, unhelpful) error messages. How will your
      // web page handle errors?
    }
  });
};