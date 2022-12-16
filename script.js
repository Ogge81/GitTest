let items = [
    [document.getElementById("rock"),2,1,"url(rock.png)"],
    [document.getElementById("paper"),0,2,"url(paper.png)"],
    [document.getElementById("scissor"),1,0,"url(scissor.png)"]]

let targets = [
    document.getElementById("left"),
    document.getElementById("right")]

function over_button( event ){
    for( let i=0; i<items.length; i++){
        if( event.target.id === items[i][0].id ){
            event.target.children[0].textContent = event.target.id;
            items[items[i][1]][0].children[0].textContent = "Wins!"
            items[items[i][2]][0].children[0].textContent = "Loose.."
            targets[0].textContent = event.target.id.toUpperCase();
            targets[0].style.backgroundImage = items[i][3];}}
}

function out_button( event ){
    if ( event.target.id === "rock" ||
         event.target.id === "paper" ||
         event.target.id === "scissor"){
            targets[1].textContent = "";
            targets[1].style.backgroundImage = "none";}
}

function click_button( event ){
    let computerHand = Math.floor(Math.random()*3)

    targets[1].textContent = items[ computerHand ][0].id.toUpperCase();
    targets[1].style.backgroundImage = items[ computerHand ][3];

    // if ( items[ computerHand ][0] )
    console.log( computerHand )
}

addEventListener("mouseover", function( event ){
    over_button( event )
})
addEventListener("mouseout", function( event ){
    out_button( event )
})
addEventListener("click", function( event ){
    click_button( event )
})
