// The module pattern is based on the object literals
// Object Literals are basically hashes, dicionaries, or key-value pair collections

const myObjectLiteral = {
  variableKey: 1,
  functionKey: () => console.log("Something")
};

myObjectLiteral.functionKey();

// The idea of the module pattern is to provide both public and private encapsulation

const namespace = (() => {
  let privateVariable = 0;

  const privateMethod = () =>
    console.log(`Private Variable: ${privateVariable}`);

  return {
    publicVariable: 1,
    publicaMethod: () => {
      privateVariable++;
      privateMethod();
    }
  };
})();

console.log(namespace.publicVariable);
namespace.publicaMethod();
namespace.publicaMethod();

// In the module pattern we can create real private variables and methods.
// In this case, only our module can access the private attributes.
// It is not accessible for the rest of the application.
