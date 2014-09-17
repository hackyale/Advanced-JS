var helloUniverse = function() {
	console.log("hello universe");
};

var callTwice = function(a) {
	a();
	a();
}

//code does not always run in code-line order, asynchronous funcs start a task
//and run it in background, when they finish they call a callback function, 
//anything that is called after an async function

$.get("http://reddit.com/hot.json"), function(response){
	var stories = response.data.children;
	for (var i in stories) {
		var story = stories[i].data;

	}
}

response();
