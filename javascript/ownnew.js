var _new = function(f) {
  var obj = {};
  obj.__proto__ = f.prototype;
  f.apply(obj, Array.prototype.slice.call(arguments, 1));
  return obj;
};

var Person = function(name, age) {
  this.name = name;
  this.age = age;
};

var fellipe = _new(Person, "Fellipe", 24);

console.log(fellipe);
