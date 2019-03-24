// Object Creation

// With an empty object
const emptyObject = {};

// Object.create constructor
const objCreate = Object.create({});

// Object instance
const intanceObject = new Object();

// set property
const obj = {};
obj.someKey = "one key";
console.log(obj.someKey);
console.log(obj["someKey"]);

obj["someKey"] = 124;
console.log(obj.someKey);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.setName = function(newName) {
  this.name = newName;
};

var tk = new Person("TK", 26);
console.log(tk.name);
console.log(tk.age);
tk.setName("TeeKay");
console.log(tk.name);
