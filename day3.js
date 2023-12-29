function getRandomColor() {
    //  a random hex color code
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeBackgroundColor() {
    //  a random color and set it as the background color of the body
    document.body.style.backgroundColor = getRandomColor();
  }

  // an onclick event to the entire document
  document.onclick = changeBackgroundColor;