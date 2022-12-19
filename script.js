let items = [
    [document.getElementById("rock"),2,1,"url(rock.png)"],
    [document.getElementById("paper"),0,2,"url(paper.png)"],
    [document.getElementById("scissor"),1,0,"url(scissor.png)"]]

let targets = [
    document.getElementById("left"),
    document.getElementById("right")]

let front = document.getElementById( "front" )
let text = document.getElementById( "msg" )

function over_button( event ){
    if( event.target.id === "rock" ){
        document.getElementById("right").position = "absolute"
        document.getElementById("right").display = "none"
        document.getElementById("right").left = "100%";
        text.style.fontSize = "20px"
        text.style.height = "20%"
        text.textContent = "Beats scissor. " + "Beaten by paper."
        targets[0].style.backgroundImage = "url(rock.png)"
        targets[0].textContent = "ROCK"}
    if( event.target.id === "paper" ){
        text.style.fontSize = "20px"
        text.style.height = "20%"
        text.style.width = "100%"
        text.textContent = "Beats rock     " + "Beaten by scissor"
        targets[0].style.backgroundImage = "url(paper.png)"
        targets[0].textContent = "PAPER"}
    if( event.target.id === "scissor" ){
        text.style.fontSize = "20px"
        text.style.height = "20%"
        text.textContent = "Beats paper     " + "Beaten by rock"
        targets[0].style.backgroundImage = "url(scissor.png)"
        targets[0].textContent = "SCISSOR"}}

function check_winner( event, computerHand ){
    document.getElementById("pointR").textContent = String(Number(document.getElementById("pointR").textContent)+1)
    if( event.target === computerHand[0] ){
        text.style.fontSize = "35px"
        text.textContent = "ITS A TIE!"
        console.log("Tie")
        targets[0].style.backgroundColor = "rgb(194, 192, 91)"
        targets[1].style.backgroundColor = "rgb(194, 192, 91)"}
    else if( event.target === items[computerHand[1]][0]){
        text.style.fontSize = "35px"
        text.textContent = "PLAYER LOOSE!"
        document.getElementById("pointC").textContent = String(Number(document.getElementById("pointC").textContent)+1)
        targets[0].style.backgroundColor = "rgb(209, 91, 85)"
        targets[1].style.backgroundColor = "rgb(144, 190, 146)"}
    else{
        text.style.fontSize = "35px"
        text.textContent = "PLAYER WINS!"
        document.getElementById("pointP").textContent = String(Number(document.getElementById("pointP").textContent)+1)
        targets[0].style.backgroundColor = "rgb(144, 190, 146)"
        targets[1].style.backgroundColor = "rgb(209, 91, 85)"}}

function click_button( event ){
    front.style.justifyContent = "center";
    text.style.height = "20%"
    if( event.target.id === "rock" || event.target.id === "paper" || event.target.id === "scissor" ){
        document.getElementById("rock").style.visibility =  "hidden";
        document.getElementById("paper").style.visibility =  "hidden";
        document.getElementById("scissor").style.visibility =  "hidden";
        document.getElementById("res").style.visibility =  "visible";
        document.getElementById("start").style.visibility =  "visible";
        
        
        let computerHand = items[ Math.floor(Math.random()*3) ]
        targets[1].textContent = computerHand[0].id.toUpperCase();
        targets[1].style.backgroundImage = computerHand[3];

        console.log( computerHand, event.target )

        check_winner( event, computerHand )}
    else if ( event.target.id === "res" ){
        document.getElementById("pointR").textContent = 0
        document.getElementById("pointP").textContent = 0
        document.getElementById("pointC").textContent = 0}
    else if ( event.target.id === "start" ){
        document.getElementById("msg").textContent = ""
        for ( let i=0; i<targets.length; i++ ){
            targets[i].textContent = "";
            targets[i].style.backgroundImage = "none";
            targets[i].style.backgroundColor = "white";}
            document.getElementById("rock").style.visibility =  "visible";
            document.getElementById("paper").style.visibility =  "visible";
            document.getElementById("scissor").style.visibility =  "visible";
            document.getElementById("res").style.visibility =  "hidden";
            document.getElementById("start").style.visibility =  "hidden";
    }

}

addEventListener("mouseover", over_button)
addEventListener("click", click_button)
