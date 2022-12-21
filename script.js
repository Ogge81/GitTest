let items2 = document.querySelectorAll(".item")
console.log( items2 )
let items = [
    [document.getElementById("rock"),2,1,"url(rock.png)"],
    [document.getElementById("paper"),0,2,"url(paper.png)"],
    [document.getElementById("scissor"),1,0,"url(scissor.png)"]]

let targets2 = document.querySelectorAll(".target")
console.log( targets2 )
// let targets = [
//     document.getElementById("left"),
//     document.getElementById("right")]

let front = document.getElementById( "front" )
let text = document.getElementById( "msg" )

function over_button( event ){
    if( event.target.parentNode.id === "hands" ){
        targets2[0].style.fontSize = "3vh"
        targets2[0].style.height = "20%"
        targets2[0].style.width = "100%"
        
        if( event.target.id === "rock" || event.target.id === "paper" || event.target.id === "scissor" ){
            targets2[4].style.backgroundImage = "url("+ event.target.id +".png)"
            targets2[4].textContent = event.target.id.toUpperCase()
        }
    }

    if( event.target.id === "rock" ){
        targets2[0].textContent = "Beats scissor. " + "Beaten by paper."
    }
    if( event.target.id === "paper" ){
        targets2[0].textContent = "Beats rock     " + "Beaten by scissor"
    }
    if( event.target.id === "scissor" ){
        targets2[0].textContent = "Beats paper     " + "Beaten by rock"
    }}

function check_winner( event, computerHand ){
    if( event.target === computerHand[0] ){
        targets2[0].style.fontSize = "5vh"
        targets2[0].textContent = "ITS A TIE!"
        targets2[4].style.backgroundColor = "rgb(194, 192, 91)"
        targets2[5].style.backgroundColor = "rgb(194, 192, 91)"}
    else if( event.target === items[computerHand[1]][0]){
        targets2[0].style.fontSize = "5vh"
        targets2[0].textContent = "PLAYER LOOSE!"
        targets2[3].textContent = String(Number(document.getElementById("pointC").textContent)+1)
        targets2[4].style.backgroundColor = "rgb(209, 91, 85)"
        targets2[5].style.backgroundColor = "rgb(144, 190, 146)"}
    else{
        targets2[0].style.fontSize = "5vh"
        targets2[0].textContent = "PLAYER WINS!"
        targets2[1].textContent = String(Number(document.getElementById("pointP").textContent)+1)
        targets2[4].style.backgroundColor = "rgb(144, 190, 146)"
        targets2[5].style.backgroundColor = "rgb(209, 91, 85)"}}

function click_button( event ){
    if( event.target.id === "rock" || event.target.id === "paper" || event.target.id === "scissor" ){
        for ( let i=0; i<items2.length; i++ ){
            if( i===0 || i===4 ){
                items2[i].style.visibility = "visible"
            }else{ items2[i].style.visibility = "hidden"}}
        
        let computerHand = items[ Math.floor(Math.random()*3) ]
        targets2[5].textContent = computerHand[0].id.toUpperCase();
        targets2[5].style.backgroundImage = computerHand[3];

        check_winner( event, computerHand )}
    else if ( event.target.id === "res" ){
        targets2[1].textContent = 0
        targets2[2].textContent = 1
        targets2[3].textContent = 0}
    else if ( event.target.id === "start" ){
        targets2[2].textContent = String(Number(targets2[2].textContent)+1)
        targets2[0].textContent = ""
        for ( let i=4; i<targets2.length; i++ ){
            targets2[i].textContent = "";
            targets2[i].style.backgroundImage = "none";
            targets2[i].style.backgroundColor = "white";}

            for ( let i=0; i<items2.length; i++ ){
                if( i===0 || i===4 ){
                    items2[i].style.visibility = "hidden"
                }else{ items2[i].style.visibility = "visible"}}
    }

}

addEventListener("mouseover", over_button)
addEventListener("click", click_button)
