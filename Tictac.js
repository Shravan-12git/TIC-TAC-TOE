let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn =  document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true; // playerX playerO

const winingway = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

 const resetgame = () => {  // this code for reset game and new game for again play
    turn = true;
    enableboxes();
    msgcontainer.classList.add("hide");
 }
   
boxes.forEach((box) => {  // this code for set O and X
    box.addEventListener("click",() => {
     console.log("box already clicked");
     if(turn === true) {
        box.innerText = "O";
        turn = false;
     } else {
        box.innerText = "X";
        turn = true;
     }
     box.disabled = true;
     checkwinner();
    })
});

const checkwinner = () => {  // this code for to check winner condition
    for(let pattern of winingway) {

        let pos1val =  boxes[pattern[0]].innerText;
        let pos2val =  boxes[pattern[1]].innerText;
        let pos3val =  boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != ""  && pos3val != ""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showwinner(pos1val);
            }
        }
    }
};
  const showwinner = (winner) => { 
    msg.innerText = `congrates , winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();  // isse first winner milne ke baad fir boxes click nhi hoga 
 };
  
 const disabledboxes = () => {  // isse ek box dobara click nhi hoga 
    for(let box of boxes) {
        box.disabled = true;
    }
 };

 const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
 };
  
 newgamebtn.addEventListener("click",resetgame);
 resetbtn.addEventListener("click",resetgame);