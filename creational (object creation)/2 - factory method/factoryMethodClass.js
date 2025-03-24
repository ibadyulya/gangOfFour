class User {
  constructor(name) {
    this.name = name;
  }
}

class Admin extends User {
  getRole() {
    return `${this.name} is an Admin`;
  }
}

class Teacher extends User {
  getRole() {
    return `${this.name} is a Teacher`;
  }
}

class Student extends User {
  getRole() {
    return `${this.name} is a Student`;
  }
}

class UserFactory {
  static createUser(role, name) {
    switch (role) {
      case "admin": return new Admin(name);
      case "teacher": return new Teacher(name);
      case "student": return new Student(name);
      default: throw new Error("Invalid role");
    }
  }
}

// Usage
const user1 = UserFactory.createUser("admin", "Alice");
console.log(user1.getRole()); // Alice is an Admin