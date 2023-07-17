const container = document.querySelector(".container");
const resolutionSlider = document.querySelector(".slider");
const rowSize = document.querySelector("#rowValue");
const colSize = document.querySelector("#colValue");


let currentColor = "#000000";
let isDrawing = false;
let currentResolution = 16;


function createGridItem() {
  const gridItem = document.createElement("div");
  gridItem.className = "grid-item";
  return gridItem;
}

function makeGrid(row, col) {
    container.style.gridTemplateColumns = `repeat(${col}, auto)`;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        const gridItem = createGridItem();
        gridInput(gridItem);
        container.appendChild(gridItem);
      }
    }
    rowSize.textContent = row;
    colSize.textContent = row;
  }  

function gridInput(gridItem) {
    gridItem.addEventListener("mousedown", () => {
      isDrawing = true;
    });
  
    gridItem.addEventListener("mouseup", () => {
      isDrawing = false;
    });
  
    gridItem.addEventListener("mousemove", (e) => {
      if (isDrawing) {
        e.target.style.backgroundColor = currentColor;
      }
    });

    gridItem.addEventListener("click", () => {
        gridItem.style.backgroundColor = currentColor;
      });
    }

    function updateGridResolution() {
        const resolution = resolutionSlider.value;
        container.innerHTML = "";
        makeGrid(resolution, resolution);
      }

function changeColor(e) {
    currentColor = e.target.value;
}

function clearGrid(e) {
    const divs = document.querySelectorAll(".container .grid-item");
    divs.forEach((div) => {
      div.style.backgroundColor = "white";
    });
  }
        
const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("input", changeColor);
const clear = document.querySelector("#clear");
clear.addEventListener("click", clearGrid);
resolutionSlider.addEventListener("input", updateGridResolution);

makeGrid(currentResolution,currentResolution);
updateGridResolution();

