const gameBoard = document.querySelector("#game-board")
// console.log(square)
// console.log(gameBoard)
function createGrid() {
    for (i = 1; i < 4; i++) {
        for (j = 1; j < 4; j++) {
            const createDiv = document.createElement("div")
            createDiv.style.cssText = `
            grid-row: ${[i]};
            grid-column: ${[j]};
            background-color: white;
            border: 5px black solid;
            background-color: white;
            `
            createDiv.setAttribute("id", `grid${[i]}${[j]}`)
            createDiv.setAttribute("class", "square")
            gameBoard.appendChild(createDiv)
            // console.log(createDiv)
        }
    }
}

createGrid()

const squares = document.querySelectorAll(".square")
const playerTurn = document.querySelector("#player-turn")

let counter = 1

squares.forEach(square => {
    square.addEventListener("click", function chooseSquare() {
        const id = square.getAttribute("id")
        const choice = document.querySelector(`#${id}`)
        // console.log(choice)
        if(choice.style.backgroundColor == "white") {
            if ((counter % 2) === 0) {
                choice.style.cssText = `
                background: red;
                border: 5px black solid;`
                playerTurn.innerText = "Blue's turn!"
            } else {
                choice.style.cssText = `
                background: blue;
                border: 5px black solid;`
                playerTurn.innerText = "Red's turn!"
            }
            counter++
        } else {
            alert("Make another choice!")
        }
    })
})

const resetBtn = document.querySelector("#reset")

function resetGame() {
    for (i = 1; i < 4; i++) {
        for (j = 1; j < 4; j++) {
            let square = document.querySelector(`#grid${i}${j}`)
            square.style.backgroundColor = "white"
        }
    }
    counter = 1
    playerTurn.innerText = "Blue's turn!"
}

resetBtn.addEventListener("click", resetGame)