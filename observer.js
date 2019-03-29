/* Observer:
   provides a update interface for each observable object
*/

const ObserverList = (() => {
  let observersList = [];

  const add = object => {
    observersList.push(object);
  };

  const remove = object => {
    const objectIndex = observersList.indexOf(object);
    observersList.splice(objectIndex, 1);
  };

  const list = () => observersList;

  return {
    add,
    remove,
    list
  };
})();

// Testing the ObserverList API
const obj1 = { name: "TK", age: 26 };
const obj2 = { name: "Kaio", age: 10 };

ObserverList.list(); // []
ObserverList.add(obj1);
ObserverList.list(); // [{ name: 'TK', age: 26 }]
ObserverList.add(obj2);
ObserverList.list(); // [{ name: 'TK', age: 26 }, { name: 'Kaio', age: 10 }]
ObserverList.remove(obj1);
ObserverList.list(); // [{ name: 'Kaio', age: 10 }]

/* Subject:
   an object that maintains a list of observers
   and notify each one if the state change.
   It also facilitates adding and removing observers from the list
*/

const Subject = (() => {
  let observers = ObserverList;

  const addObserver = observer => observers.add(observer);
  const removeObserver = observer => observers.remove(observer);
  const notifyObservers = context => {
    for (let observer of observers.list()) {
      observer.update(context);
    }
  };

  return {
    addObserver,
    removeObserver,
    notifyObservers
  };
})();

/* Observer:
   provides a update interface for each observable object
*/

const Observer = (() => {
  const update = context => {
    // update the observer with the context
  };

  return {
    update
  };
})();
