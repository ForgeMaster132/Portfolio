function toggle(){
    this.className = "gridBlockOn";
}

let globalGridSize = 16;
createGrid(globalGridSize);

document.getElementById("size").addEventListener("click", openModal);
document.getElementById("erase").addEventListener("click", eraser);
document.getElementById("modal-confirm").addEventListener("click", applyGridSize);
document.getElementById("modal-cancel").addEventListener("click", closeModal);

function createGrid(gridSize){
    globalGridSize = gridSize;
    let grid = document.getElementById("grid");
    while(grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
    let auto = "auto ";
    let final = auto.repeat(gridSize);
    grid.style.gridTemplateColumns = final;
    for(let i = (gridSize*gridSize); i != 0; i--){
        let divs = document.createElement("div");
        divs.className = "gridBlock";
        divs.addEventListener("mouseover", toggle);
        grid.appendChild(divs);
    }
}

function eraser(){
    createGrid(globalGridSize);
}

function openModal(){
    document.getElementById("grid-size-input").value = "";
    document.getElementById("modal").classList.remove("hidden");
}

function closeModal(){
    document.getElementById("modal").classList.add("hidden");
}

function applyGridSize(){
    let input = document.getElementById("grid-size-input");
    let gridSize = parseInt(input.value);
    if(isNaN(gridSize) || gridSize <= 0){
        gridSize = 16;
    } else if(gridSize > 250){
        gridSize = 250;
    }
    closeModal();
    createGrid(gridSize);
}

