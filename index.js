const gridContainer = document.getElementById("grid-container");
let gridSize = 16;

const gridSizeSlider = document.getElementById("myRange");
const displayGridVal = document.querySelector(".display-grid-size-text");
gridSizeSlider.addEventListener("input", ()=>{
        displayGridVal.textContent = gridSizeSlider.value + " x " + gridSizeSlider.value;
        gridContainer.textContent = "";
        createGrid(gridSizeSlider.value);

});

const displayColor =  document.getElementById("colorPicker");
const colorPicker = document.querySelector(".color-picker");




function createGrid(size){
    const cellSize = 400/size;
    console.log(gridSizeSlider.value)
    for (let i=0;i<size; i++){      //row
        for (let j=0; j<size; j++){     //column 
            const gridCell = document.createElement('div');
            gridCell.classList.add('grid-cell');
            gridContainer.appendChild(gridCell);

            gridCell.style.width = cellSize + "px";
            gridCell.style.height = cellSize + "px";

            colorPicker.addEventListener("input", () =>{

            
                gridCell.addEventListener("mouseenter",()=>{
                    gridCell.style.backgroundColor = displayColor.value;

                })
            })
        }
    }

}
createGrid(gridSize);
