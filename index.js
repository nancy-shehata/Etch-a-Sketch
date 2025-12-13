const gridContainer = document.getElementById("grid-container");
let gridSize = 16;

const gridSizeSlider = document.getElementById("myRange");
const displayGridVal = document.querySelector(".display-grid-size-text");
displayGridVal.textContent = "Grid Size: "
gridSizeSlider.addEventListener("input", ()=>{
        displayGridVal.textContent =  "Grid Size: " + gridSizeSlider.value + " x " + gridSizeSlider.value;
        gridContainer.textContent = "";
        createGrid(gridSizeSlider.value);

});

const displayColor =  document.getElementById("colorPicker");
const colorPicker = document.querySelector(".color-picker");




function createGrid(size){
    const cellSize = 600/size;
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


function clearGrid(){
    const clear = document.querySelector(".clear-btn");
            clear.addEventListener("click", () =>{
            const gridCell = document.querySelectorAll(".grid-cell")
            gridCell.forEach((gridCell) =>{
                gridCell.style.backgroundColor = "";
                console.log("clicked")
                
            });

        });

}
clearGrid();



document.addEventListener("DOMContentLoaded", () =>{
    const sky = document.getElementById("sky")
    const cloudNum = 25;

    function createCloud(){
        const cloud = document.createElement("img")
        const randomSize = Math.random() * 800 + 1000;
        cloud.style.width = randomSize + "px";
        cloud.style.left = randomSize +"%";
        cloud.src = "images/cloud.png"
        sky.appendChild(cloud);
        cloud.classList.add("cloud");
    }
    for(let i=0; i<cloudNum;i++){   
    createCloud();
    }
})