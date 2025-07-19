let button=document.querySelectorAll("button");
let first=true;
let WinningCombinations=[[0,1,2],[0,3,6],[6,7,8],[2,5,8],[1,4,7],[2,5,8],[3,4,5],[0,4,8],[2,4,6]];
let count=0;
let disableButtons=()=>{
    button.forEach((butt)=>{
        butt.disabled="true";
    });
}
button.forEach((butt)=>{
    butt.addEventListener("click",()=>{
        if(first){
            butt.innerText="❌";
            first=false;
            count++;
            checkWinner();
        }else{
            butt.innerText="O";
            first=true;
            count++;
            checkWinner();
        }
        butt.disabled=true;
    });
});
let checkWinner=()=>{
    for(let i of WinningCombinations){
        let position1=button[i[0]];
        let position2=button[i[1]];
        let position3=button[i[2]];
        if(position1.innerText!==""&&position2.innerText!==""&&position3.innerText!==""){//check only if the positions are filled
            if(position1.innerText==="❌"&&position2.innerText==="❌"&&position3.innerText==="❌"){
                document.querySelector("span").innerText="Winner is Player 1";
                document.querySelector("span").style.color="red";
                document.querySelector("span").style.fontSize="40px";
                position1.style.backgroundColor="rgb(198, 198, 221)";
                position2.style.backgroundColor="rgb(198, 198, 221)";
                position3.style.backgroundColor="rgb(198, 198, 221)";
                disableButtons();
                return;
            }else if(position1.innerText==="O"&&position2.innerText==="O"&&position3.innerText==="O"){
                document.querySelector("span").innerText="Winner is Player 2";
                document.querySelector("span").style.color="black";
                document.querySelector("span").style.fontSize="40px";
                position1.style.backgroundColor="rgb(198, 198, 221)";
                position2.style.backgroundColor="rgb(198, 198, 221)";
                position3.style.backgroundColor="rgb(198, 198, 221)";
                disableButtons();
                return;
            }else if(count===9){
                document.querySelector("span").innerText="Draw";
                document.querySelector("span").style.fontSize="40px";
            }
        }
    }
}
