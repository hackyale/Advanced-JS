var helloUniverse = function() {
  console.log("hello universe");
};

var callTwice = function(func) {
  func(7, 8);
  func();
};

callTwice(helloUniverse);
callTwice(function(a) {
  console.log("hello back");
});