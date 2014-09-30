// Using the jQuery .ready() function!
$(document).ready(function() {
  loadReddit();
  $("#refresh").click(function() {
    loadReddit();
  });

  $(window).mousemove(function(mouseCoord) {
    // Ex. 3: My Shadow code here

    // You can change the css of an element with the .css function—
    //   look up the documentation for it on jQuery.com!
    var followDot = function() {
      $("#follow-dot").css({ "top": mouseCoord.pageY-4, "left": mouseCoord.pageX-6.5 });
    }
    setTimeout(followDot(), 300);
    // console.log(mouseCoord.pageX, mouseCoord.pageY); // Just to see what's going on. 
    // Optionally, add a delay. Hint: look up the setTimeout function!
  });

  getFB(); // Defined below
});

// Ex. 2: Objectify Me code here
var krishnan = {
  fname: "krishnan",
  lname: "srinivasan",
  favoriteCereal: "granola",
  interests: "programming, cooking, photography",
  fullname: function() {
    return this.fname + " " + this.lname;
  },
  minibio: function() { 
    var toPrint = "Hi my name is " + this.fullname();
    toPrint += " and my favorite cereal is " + this.favoriteCereal + ". ";
    toPrint += "In my free time, I like to ";
    for (var interest in this.interests) {
      toPrint += interst + ", ";
    }
    console.log(toPrint);
    return toPrint;
  }
}

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
      fields: "id,name,picture", // What goes here? 
      // Access token obtained at https://developers.facebook.com/tools/explorer
      // Note that it expires after a while, so you occasionally need to go back
      //   and get another one. 
      access_token: "CAACEdEose0cBAEFxCIzfbvVk5AIJJ72rNdMrCdLJtAWDWu22OMOB7ljVJlaC8x9KoFtp4ZCOzZBubkUVaDMZAr0DesyNEfsw4CRaQXFLpNVD1Du5F2tAyxyyoohbMAiF7AZBp9WvIkjt4pZApYGMUx1ZBO7gVZBSaMB0ozbZBkhi3UqNz1GAzoncmzuEOLZB4UOLlnLUVm04kMWWLHmJNJcUF"
    },
    success: function(response) {
      console.log(response);
      $("#facebook-profile").append($('<img>',{id:'profpic',src:response.picture.data.url}));
      $("#facebook-profile").append("<p> userID: " + response.id + "</p>");
      $("#facebook-profile").append("<p> name: " + response.name + "</p>");
      $("#facebook-profile").prepend("<p>Facebook Profile: </p>");
    }, 
    error: function(jxqr, text) {
      console.log(jxqr, text);
      // Error handling is a big part of coding, and we all know website that
      // show you no (or even worse, unhelpful) error messages. How will your
      // web page handle errors?
    }
  });
};