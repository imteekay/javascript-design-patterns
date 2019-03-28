// A Singleton restrict the instantiation of a class to a single object.
// If we instantiate the first, and single object, it will use the same reference in the next instantiation

const singleton = (() => {
  let instance;
  const privateRandomNumber = Math.random();

  const init = () => ({
    getRandomNumber: () => privateRandomNumber
  });

  return {
    getInstance: () => instance || (instance = init())
  };
})();

const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();

console.log(instance1.getRandomNumber() === instance2.getRandomNumber()); // always true

// We use the module pattern to create the local scope and define the (single) instance
// The get instance method will access the defined `instance` first. If has no instance yet,
// it will call `init`, assign to instance, and return the instance
