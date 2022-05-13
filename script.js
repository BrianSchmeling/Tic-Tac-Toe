const gameBoard = document.querySelector("#game-board")
const winner = document.querySelector("#winner")
// console.log(square)
// console.log(gameBoard)

let counter = 1
let winArr = ["0","0","0","0","0","0","0","0","0"]
let redWins = 0
let blueWins = 0

function createGrid() {
    let arrPlace = 0
    for (i = 1; i < 4; i++) {
        for (j = 1; j < 4; j++) {
            const createDiv = document.createElement("div")
            createDiv.style.cssText = `
            grid-row: ${[i]};
            grid-column: ${[j]};
            border: 5px black solid;
            background-color: white;`
            createDiv.setAttribute("id", `grid${[i]}${[j]}`)
            createDiv.setAttribute("class", "square")
            createDiv.setAttribute("value", arrPlace)
            arrPlace++
            gameBoard.appendChild(createDiv)
            // console.log(createDiv)
        }
    }
}

createGrid()

const squares = document.querySelectorAll(".square")
const playerTurn = document.querySelector("#player-turn")


squares.forEach(square => {
    square.addEventListener("click", function chooseSquare() {
        const id = square.getAttribute("id")
        const choice = document.querySelector(`#${id}`)
        // console.log(choice.getAttribute("value"))
        if(choice.style.backgroundColor == "white") {
            if ((counter % 2) === 0) {
                choice.style.cssText = `
                background: red;
                border: 5px black solid;`
                playerTurn.innerText = "Blue's turn!"
                winArr.splice(choice.getAttribute("value"), 1, "red")
                // console.log(choice.getAttribute("value"))
            } else {
                choice.style.cssText = `
                background: blue;
                border: 5px black solid;`
                playerTurn.innerText = "Red's turn!"
                winArr.splice(choice.getAttribute("value"), 1, "blue")
            }
            counter++
        } else {
            alert("Make another choice!")
        }
        checkWinner()
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
    winArr = ["0","0","0","0","0","0","0","0","0"]
}

resetBtn.addEventListener("click", resetGame)

function checkWinner() {
    if (winArr[0] === "red" && winArr[1] === "red" && winArr[2] === "red" ||
    winArr[3] === "red" && winArr[4] === "red" && winArr[5] === "red" ||
    winArr[6] === "red" && winArr[7] === "red" && winArr[8] === "red" ||
    winArr[0] === "red" && winArr[3] === "red" && winArr[6] === "red" ||
    winArr[1] === "red" && winArr[4] === "red" && winArr[7] === "red" ||
    winArr[2] === "red" && winArr[5] === "red" && winArr[8] === "red" ||
    winArr[0] === "red" && winArr[4] === "red" && winArr[8] === "red" ||
    winArr[2] === "red" && winArr[4] === "red" && winArr[6] === "red"
    ){
        redWins++
        winner.innerText = `Red's Score: ${redWins} | Blue's Score: ${blueWins}`
        alert("Red Wins!")
        // resetGame()
    } else if (winArr[0] === "blue" && winArr[1] === "blue" && winArr[2] === "blue" ||
    winArr[3] === "blue" && winArr[4] === "blue" && winArr[5] === "blue" ||
    winArr[6] === "blue" && winArr[7] === "blue" && winArr[8] === "blue" ||
    winArr[0] === "blue" && winArr[3] === "blue" && winArr[6] === "blue" ||
    winArr[1] === "blue" && winArr[4] === "blue" && winArr[7] === "blue" ||
    winArr[2] === "blue" && winArr[5] === "blue" && winArr[8] === "blue" ||
    winArr[0] === "blue" && winArr[4] === "blue" && winArr[8] === "blue" ||
    winArr[2] === "blue" && winArr[4] === "blue" && winArr[6] === "blue"
    ){
        blueWins++
        winner.innerText = `Red's Score: ${redWins} | Blue's Score: ${blueWins}`
        alert("Blue Wins!")
        resetGame()
    } else if (winArr[0] !== "0" && winArr[1] !== "0" && winArr[2] !== "0" && winArr[3] !== "0" && winArr[4] !== "0" !== "0" && winArr[5] !== "0" && winArr[6] !== "0" && winArr[7] !== "0" && winArr[8] !== "0") {
        alert("It's a tie!")
        // resetGame()
    }
}