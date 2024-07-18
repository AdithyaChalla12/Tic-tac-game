let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector('#reset-button');
let newBtn=document.querySelector('#new-button');
let msgContainer=document.querySelector('.msg-winner');
let msg=document.querySelector('#msg');
let turnO=true;

const winningPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
   ];
   boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            box.style.color = 'green';
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
   })
   const resetGame=()=>{
    turnO=true;
    msgContainer.classList.add('hide');
    enableBoxes();
   }
   const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
   } 
   const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
   }
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disabledBoxes();

}
   const checkWinner=()=>{
    for(let pattern of winningPattern){
       let posVal1= boxes[pattern[0]].innerText;
       let posVal2=boxes[pattern[1]].innerText;
       let posVal3=boxes[pattern[2]].innerText;
       console.log(posVal1,posVal2,posVal3);
       if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
        if(posVal1==posVal2 && posVal2==posVal3){
            console.log("winner",posVal1);
            showWinner(posVal1);
        }
       }

    }
   }
   newBtn.addEventListener("click",resetGame);
   resetBtn.addEventListener("click",resetGame);
   