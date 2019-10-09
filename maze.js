const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

let boxTop = 0;
let boxLeft = 0;
let rowLocation = 9
let columnLocation = 0

function moveGamePiece() {
    let winTardi = document.createElement("img")
        winTardi.src = "winTardi.png"
    if (map[rowLocation][columnLocation +1]==="F") {
        document.body.appendChild(winTardi)
    }
    if (event.keyCode == 40 && map[rowLocation +1][columnLocation]===" ") {
        boxTop += 100
        tardigrade.style.top = boxTop + "px"
        rowLocation += 1
    }
    else if (event.keyCode == 38 && map[rowLocation -1][columnLocation]===" ") {
        boxTop -= 100
        rowLocation -= 1
        tardigrade.style.top = boxTop + "px"
    }
    else if (event.keyCode == 39 && (map[rowLocation][columnLocation+1]===" " || map[rowLocation][columnLocation +1]==="F")) {
        boxLeft += 100
        columnLocation += 1
        tardigrade.style.left = boxLeft + "px"
    } 
    else if (event.keyCode == 37 && map[rowLocation][columnLocation - 1]===" ") {
        boxLeft -= 100
        columnLocation -= 1
        tardigrade.style.left = boxLeft + "px"
    }
}

document.addEventListener('keydown', moveGamePiece);

let container = document.getElementById("container")
let tardigrade = document.getElementById("tardigrade");

for(let i = 0; i < map.length; i++) {
        let row = document.createElement("div") 
        row.className = ("rows")
        container.appendChild(row)
        for(let k = 0; k < map[0].length; k++){
            let cell = document.createElement("div")
            // con
            
            // cells.id = "Cell" + i + "-" + k
            
            if (map[i][k]==="W"){                
                cell.className = "wall"    
            }
            if (map[i][k]===" ") {
                cell.className = "openSpace"
            }
            if (map[i][k]==="F") {
                cell.className = "finish"
            }
            if (map[i][k]==="S") {
                cell.className = "start"
                console.log(tardigrade)
                cell.appendChild(tardigrade)
            }
            row.appendChild(cell)         
        }
}


// //1. make sure the map is a map
// //2. piece one being able to move
// //3. being sure the object is tracking
// //4. win 


// //I need something to keep track of (or retrieve on demand) the player's current position in the maze 
// //(row index and column index). 
//     //You could do this one of several ways: 
            
//             //You could keep a persistent record of the player's position in, say, a global array or object
//             // whose sole job is keeping track of the player's current position. 
            
//             //You could constantly update your map array to reflect your player's movement (move the "S" 
//             //around). 
               
//             //do a little math on the player DIV's current position on the screen, relative 
//             //to the start element's current position on the screen and the size of your cells 

// //Make each cell of the maze a DIV.

// //Make each row of the maze a DIV using "display: flex;"

// //use an absolutely-positioned DIV to represent the player's current position in the maze.  
//     //to do this, i need a parent constainer to position it relative to  
//     //Movement can be performed a couple different ways: In the case of A, change the absolute position of the 
//     //player DIV
