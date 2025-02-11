// Example: Database connection, Logger, Config manager.

// When to Use Singleton?
// ✔ Global configurations (e.g., database connection, logging service, caching).
// ✔ State management (e.g., a store shared across components in React).
// ✔ Controlling access to a resource (e.g., file system, network sockets).

// ⚠ Avoid using Singleton if:

// It introduces tight coupling between modules.
// It makes testing harder by keeping state across test cases.
// It violates the Single Responsibility Principle (SRP).

class Singleton {
  static instance = null;

  constructor() {
    if (Singleton.instance) {
      throw new Error("Use Singleton.getInstance() instead of new.");
    }
    console.log("Singleton instance created!");
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

// Usage
const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // true (Same instance)