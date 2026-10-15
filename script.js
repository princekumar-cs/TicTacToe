let board = document.body.childNodes[3];
let count = 0;
let res = "";
let win = false;
let Oselects = [];
let Xselects = [];
let winPatterns = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["02", "11", "20"]
];
function showResult(player){
    let pri = document.body.childNodes[1];
    pri.style.display = "block";
     if (player === "Draw") {
        pri.innerText = "🤝 It's a Draw!";
    } else {
        pri.innerText = player + " Wins!";
    }
}
function turnDisplay() {
    document.getElementById("display").style.display = "block";
    document.getElementById("display").innerText =
        `Player ${count % 2 === 0 ? "O" : "X"}'s Turn`;
}
board.addEventListener("click", (event) => {
    res = event.target.id;
    let box = document.getElementById(res);
    if (Oselects.includes(res) || Xselects.includes(res)) {
        console.log("Already Selected...");
    }
    else {
        if(win){return}if(!win){turnDisplay()}
        if (count % 2 == 0) {
            box.innerText = "X";
            Xselects.push(res);
        } else {
            box.innerText = "O";
            Oselects.push(res);
        }
        count++;
        if(count > 4){
            for(let index = 0; index < winPatterns.length ; index++){
                let Xcount = 0;
                let Ocount = 0;
                for(let j = 0; j < winPatterns[index].length ; j++){
                    if(Xselects.includes(winPatterns[index][j])){
                        Xcount++;
                    }
                    if(Oselects.includes(winPatterns[index][j])){
                        Ocount++;
                    }
                }
                if(Xcount === 3){
                showResult("X");
                win = true;
                return;
                }if(Ocount === 3){
                    showResult("O");
                    win = true;
                    return;
                }
            }
        if(count == 9)
        {
            showResult("Draw");
        }
        }
    }
})

function reset(){
    count = 0;
    win = false;
    Oselects = [];
    Xselects = [];
    document.querySelectorAll(".box").forEach(box => {
        box.innerText = "";
    });
    document.getElementById("display").style.display = "none";
}