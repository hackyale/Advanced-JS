// Object accessing

var rafi = {name: "Rafi"};
// A global function
var setName = function(obj, name) {
  obj["name"] = name; // Or obj.name = name.
};
// Adding a function to the object
rafi.setName = function(name) {
  this.name = name;
}

// Now we can say:

rafi.setName("joe");
console.log(rafi.name);