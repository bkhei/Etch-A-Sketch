// Create a webpage with a 16x16 grid of square divs.
const container = document.getElementById("container");
const gridSize = 16; // Grid size of 16x16
const containerWidth = container.clientWidth; // Get the width of the container
const cellSize = containerWidth / gridSize; // Calculate the size of each cell

// Iterate through the grid size
for (let i = 0; i < gridSize * gridSize; i++) {
  // Loop through the grid size
  const cell = document.createElement("div"); // Define cell as a div element
  cell.classList.add("cell"); // Add class cell to the cell div
  cell.style.width = `${cellSize}px`;
  cell.style.height = `${cellSize}px`; // Set each cell to be a square
  container.appendChild(cell); // Append the cell div to the container div
  cell.addEventListener("mouseover", () => {
    // Change the button's background color
    cell.style.backgroundColor = "red";
  });
}

function newGrid() {
  let value = prompt(
    "Enter the new grid size (value must be smaller than 100): ",
    "16",
  );
  if (value >= 100 || value == null)
    text = "Invalid input. Please enter a value smaller than 100.";
  else {
    container.innerHTML = "";
    for (let i = 0; i < value * value; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = `${containerWidth / value}px`;
      cell.style.height = `${containerWidth / value}px`;
      container.appendChild(cell);
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "red";
      });
    }
  }
}

// Create a button that will clear the current grid and send a popup to ask for the new grid size
const newButton = document.createElement("button");
newButton.textContent = "Adjust Grid Size";
document.body.appendChild(newButton);

newButton.addEventListener("click", () => newGrid());
