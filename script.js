let items = [
    [document.getElementById("rock"),2,1,"url(rock.png)"],
    [document.getElementById("paper"),0,2,"url(paper.png)"],
    [document.getElementById("scissor"),1,0,"url(scissor.png)"]]

let targets = [
    [document.getElementById("left"), "yellow", "green", "red"],
    [document.getElementById("right"), "yellow", "green", "red"]]

function over_button( event ){
    for( let i=0; i<items.length; i++){
        if( event.target.id === items[i][0].id ){
            event.target.children[0].textContent = event.target.id;
            targets[0][0].textContent = event.target.id.toUpperCase();
            targets[0][0].style.backgroundImage = items[i][3];}}
}

function out_button( event ){
    if ( event.target.id === "rock" ||
         event.target.id === "paper" ||
         event.target.id === "scissor"){
            targets[1][0].textContent = "";
            targets[1][0].style.backgroundImage = "none";}
}

function check_winner( event ){
    let computerHand    = items[ Math.floor(Math.random()*3) ]
    let winningHand     = items[ computerHand[1] ]
    let loosingHand     = items[ computerHand[2] ]
    console.log( computerHand, winningHand, loosingHand )
    if( event.target.children[0] === "sub"){
        console.log( computerHand, winningHand, loosingHand )
    }
}

function click_button( event ){
    check_winner( event )
    let computerHand = items[ Math.floor(Math.random()*3) ]
    console.log( computerHand[0].children, event.target )
    console.log( event.target.id === computerHand[0].id )
    if ( event.target.children[0].id === computerHand[0].children[0].id ){

         targets[1][0].textContent = computerHand[0].id.toUpperCase();
         targets[1][0].style.backgroundImage = computerHand[3];

        if( event.target.id === computerHand[0].id ){
            console.log( "OAVGJORT" )
            document.getElementById( "left" ).style.backgroundColor = "yellow";
            document.getElementById( "right" ).style.backgroundColor = "yellow";}
        else if ( items[ computerHand[1] ][0].id === event.target.id ){
            console.log( "SPELARE FÖRLORAR" )
            document.getElementById( "left" ).style.backgroundColor = "red";
            document.getElementById( "right" ).style.backgroundColor = "green";}
        else { 
            console.log( "SPELARE VINNER!" )
            document.getElementById( "left" ).style.backgroundColor = "green";
            document.getElementById( "right" ).style.backgroundColor = "red";}

        //  targets[1].textContent = items[ computerHand ][0].id.toUpperCase();
        //  targets[1].style.backgroundImage = items[ computerHand ][3];
         
        }
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

// let ctx = document.getCSSCanvasContext("2d", "fooBar", 50, 50 )

// ctx.fillRect(0, 0, 50, 50)
