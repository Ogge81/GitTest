let items = [
    [document.getElementById("rock"),2,1,"url(rock.png)"],
    [document.getElementById("paper"),0,2,"url(paper.png)"],
    [document.getElementById("scissor"),1,0,"url(scissor.png)"]]

let targets = [
    document.getElementById("left"),
    document.getElementById("right")]

function over_button( event ){
    if( event.target.id === "rock" ){
        targets[0].style.backgroundImage = "url(rock.png)"
        targets[0].textContent = "ROCK"}
    if( event.target.id === "paper" ){
        targets[0].style.backgroundImage = "url(paper.png)"
        targets[0].textContent = "PAPER"}
    if( event.target.id === "scissor" ){
        targets[0].style.backgroundImage = "url(scissor.png)"
        targets[0].textContent = "SCISSOR"}}

function out_button( event ){
    if( event.target.children[0].id === "sub" ){
        for ( let i=0; i<targets.length; i++ ){
            targets[i].textContent = "";
            targets[i].style.backgroundImage = "none";
            targets[i].style.backgroundColor = "white";}}}

function check_winner( event, computerHand ){
    document.getElementById("pointR").textContent = String(Number(document.getElementById("pointR").textContent)+1)
    if( event.target === computerHand[0] ){
        console.log("Tie")
        targets[0].style.backgroundColor = "yellow"
        targets[1].style.backgroundColor = "yellow"}
    else if( event.target === items[computerHand[1]][0]){
        document.getElementById("pointC").textContent = String(Number(document.getElementById("pointC").textContent)+1)
        targets[0].style.backgroundColor = "red"
        targets[1].style.backgroundColor = "green"}
    else{
        document.getElementById("pointP").textContent = String(Number(document.getElementById("pointP").textContent)+1)
        targets[0].style.backgroundColor = "green"
        targets[1].style.backgroundColor = "red"}}

function click_button( event ){
    let computerHand = items[ Math.floor(Math.random()*3) ]
    targets[1].textContent = computerHand[0].id.toUpperCase();
    targets[1].style.backgroundImage = computerHand[3];

    console.log( computerHand, event.target )

    check_winner( event, computerHand )}

addEventListener("mouseover", over_button)
addEventListener("mouseout", out_button)
addEventListener("click", click_button)
