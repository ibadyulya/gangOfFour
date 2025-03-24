// Abstract Factory Interface
class UIFactory {
  createButton() {}
  createTextBox() {}
}

// Concrete Factory 1 - Light Theme
class LightUIFactory extends UIFactory {
  createButton() {
    return new LightButton();
  }
  createTextBox() {
    return new LightTextBox();
  }
}

// Concrete Factory 2 - Dark Theme
class DarkUIFactory extends UIFactory {
  createButton() {
    return new DarkButton();
  }
  createTextBox() {
    return new DarkTextBox();
  }
}

// Concrete Products
class LightButton {
  render() {
    return "Rendering Light Button";
  }
}

class DarkButton {
  render() {
    return "Rendering Dark Button";
  }
}

class LightTextBox {
  render() {
    return "Rendering Light TextBox";
  }
}

class DarkTextBox {
  render() {
    return "Rendering Dark TextBox";
  }
}

// Usage
const factory = new DarkUIFactory();
const button = factory.createButton();
const textBox = factory.createTextBox();

console.log(button.render()); // Rendering Dark Button
console.log(textBox.render()); // Rendering Dark TextBox
