const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
  let currentIndex = 0;

  function displayCurrentName() {
    const nameDisplay = document.getElementById("name-display");
    nameDisplay.textContent = names[currentIndex];
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % names.length;
    displayCurrentName();
  }

  function showPrevious() {
    currentIndex = (currentIndex - 1 + names.length) % names.length;
    displayCurrentName();
  }

 
  displayCurrentName();