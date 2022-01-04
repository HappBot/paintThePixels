// -- Creating the cells --
// Declaring a variable for the grid-container
const grid = document.getElementById("grid-container");

// Filling the grid
var output, cell_counter;

output = "";
cell_counter = 0;

// 60 rows
for (let row = 1; row <= 60; row++) {
    
    // 80 columns
    for (let col = 1; col <= 80; col++) {

        cell_counter++;
        if (row%2==1) {
            if (cell_counter%2==1) {
                output += '<div class="cell color1"></div>'
            } else {
                output += '<div class="cell color2"></div>'
            }    
        } else {
            if (cell_counter%2==0) {
                output += '<div class="cell color1"></div>'
            } else {
                output += '<div class="cell color2"></div>'
            }  
        }
           
    }
}

grid.innerHTML = output;

// -- Coloring each cell --
// Getting the color from the <input color>
const color = document.getElementById('color-picker');

// Declaring a list of the <div>s
const cells = document.getElementsByTagName("div");

// Coloring with each click
for (const cell of cells) {
    cell.addEventListener('click', () => {
        cell.style.backgroundColor = color.value;
        cell.style.borderColor = color.value;
    })
}