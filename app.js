const grid = document.getElementById("container");
const gridSizeButton = document.getElementById("changeSize")
const gridColorButton = document.getElementById("changeColor")



function createGrid(){
    let number = prompt("Enter grid size")

    let gridSize = number*number
    let cellWidth = 60/number + "rem";
    let cellHeight = 60/number + "rem";

    for(let i = 0; i < gridSize; i++){
        const cells = document.createElement("div");
        cells.classList.add("baseCell");
        cells.style.height = `${cellHeight}`
        cells.style.width = `${cellWidth}`
        grid.style.gridAutoColumns
        grid.style.gridAutoRows 
        grid.appendChild(cells)
    }

    let boxes = document.querySelectorAll(".baseCell");
    boxes.forEach(box => box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";

    }));


}
createGrid()