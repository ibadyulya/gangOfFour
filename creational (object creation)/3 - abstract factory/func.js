const createButton = (theme) => {
    return theme === "dark"
      ? { render: () => "Rendering Dark Button" }
      : { render: () => "Rendering Light Button" };
  };
  
  const createTextBox = (theme) => {
    return theme === "dark"
      ? { render: () => "Rendering Dark TextBox" }
      : { render: () => "Rendering Light TextBox" };
  };
  
  const UIFactory = (theme) => ({
    createButton: () => createButton(theme),
    createTextBox: () => createTextBox(theme)
  });
  
  // Usage
  const factory2 = UIFactory("light");
  const btn = factory2.createButton();
  const txt = factory2.createTextBox();
  
  console.log(btn.render());  // Rendering Light Button
  console.log(txt.render());  // Rendering Light TextBox
  