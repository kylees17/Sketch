const container = document.getElementById("container");
const resizeButton = document.getElementById("resize-btn");

let gridSize = 16;  // Default grid size

function createGrid(size) {
  container.innerHTML = '';  // Clear existing grid
  
  // Set grid container size dynamically based on number of squares
  const squareSize = 960 / size; // 960px is the total container width

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener('mouseenter', () => {
      // Darkening effect for the squares
      let currentColor = square.style.backgroundColor;
      if (!currentColor || currentColor === 'rgb(0, 0, 0)') {
        square.style.backgroundColor = 'rgb(0, 0, 0)';
      } else {
        // If square is not fully dark, darken it by 10%
        const color = currentColor.match(/\d+/g); // Extract RGB values
        const darkenValue = 0.9; // Darkening factor

        let newColor = color.map(c => Math.floor(c * darkenValue)).join(',');
        square.style.backgroundColor = `rgb(${newColor})`;
      }
    });

    container.appendChild(square);
  }
}

function resizeGrid() {
  let newSize = parseInt(prompt("Enter the number of squares per side (max 100):"));
  if (newSize >= 1 && newSize <= 100) {
    gridSize = newSize;
    createGrid(gridSize);
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
}

// Initialize the grid on page load
createGrid(gridSize);

// Add event listener to resize button
resizeButton.addEventListener('click', resizeGrid);
