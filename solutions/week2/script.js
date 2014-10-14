// Using the jQuery .ready() function!
$(document).ready(function() {
  loadReddit();
  $("#refresh").click(function() {
    // Ex. 1: Refresh Refresher code here
    loadReddit();
  });

  $(window).mousemove(function(e) {
    // Ex. 3: My Shadow code here
    setTimeout(function() {
      $("#follow-dot").css({left: e.pageX + 10, top :e.pageY + 10 });
    }, 200);
  });

  getFB(); // Defined below
});

// Ex. 2: Objectify Me code here
// An example person
var rafi = {
  fname: "Rafi",
  lname: "Khan",
  favoriteCereal: "Special K ;)",
  interests: ["coding", "sleeping"],
  fullname: function() {
    return this.fname + " " + this.lname;
  },
  miniBio: function() {
    toPrint = "Hi my name is " + this.fullname();
    toPrint += " and my favorite cereal is " + this.favoriteCereal;
    toPrint += " In my free time, I like to do ";
    for (var i in this.interests) {
      toPrint += this.interests[i] + " ";
    }
    console.log(toPrint);
    return toPrint;
  }
}

rafi.miniBio();

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
    method: "get",
    url: "https://graph.facebook.com/me",
    data: {
      fields: "name,picture",
      // Access token obtained at https://developers.facebook.com/tools/explorer
      access_token: "CAACEdEose0cBANN0agy6nV4NcCJqZCKbUuCsPnKfC5KNziqhR7yPNX8ONRIkOdorS9IuM1VmHj1srpAKRqfnFFtZApN7lJbLFoAYwkIvM06nrvtp4XyuxSp6wQpIyOjtdHsTDK9Kw6qDBVqyiyWZBxTQhOc05O6aGLiEKa156VPOK7To0c20DZALL6vKvyniNmD5Tj5LdwDBBWyyz2cG"
    },
    success: function(response) {
      console.log(response);
      picture = response.picture.data.url;
      $("body").prepend(
        $("<p>").html(response.name),
        $("<img>").attr("src", picture)
      );
    }
  });
};

//     error: function(jxqr, text) {
//       console.log(jxqr, text);
//       // Error handling is a big part of coding, and we all know website that
//       // show you no (or even worse, unhelpful) error messages. How will your
//       // web page handle errors?
//     }
//   });
// };