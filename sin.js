const Singleton = (function () {
  let instance;

  function createInstance() {
    // Private constructor to create the Singleton instance
    const object = new Object();
    object.someProperty = "I am a Singleton instance and This statement is used for Singleton objects only";
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// Usage
const singletonA = Singleton.getInstance(); 
const singletonB = Singleton.getInstance();

console.log(singletonA === singletonB); // true, both instances are the same

console.log(singletonA.someProperty);  // "I am a Singleton instance"
console.log(singletonB.someProperty);  // "I am a Singleton instance"
