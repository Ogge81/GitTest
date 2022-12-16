let items = [
    [document.getElementById("rock"),2,1,"url(rock.png)"],
    [document.getElementById("paper"),0,2,"url(paper.png)"],
    [document.getElementById("scissor"),1,0,"url(scissor.png)"]]

let targets = [
    document.getElementById("front"),
    document.getElementById("back")]

addEventListener("mouseover", function( event ){
    for( let i=0; i<items.length; i++){
        if( event.target.id === items[i][0].id ){
            event.target.children[0].textContent = event.target.id;
            items[items[i][1]][0].children[0].textContent = "Wins!"
            items[items[i][2]][0].children[0].textContent = "Loose.."
            targets[0].textContent = event.target.id;
            targets[1].style.backgroundImage = items[i][3];
            console.log( targets[1].backgroundImage )
        }
    }
})
