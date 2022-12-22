let items = document.querySelectorAll(".item")
let targets = document.querySelectorAll(".target")

function over_button( event ){
    if( event.target.id === "rock" || event.target.id === "paper" || event.target.id === "scissor" ){
        // targets[0].style.fontSize = "3vh"
        // targets[0].style.justify
        targets[0].style.width = "50%"
        targets[0].style.height = "70%"
        targets[4].style.backgroundImage = "url("+ event.target.id +".png)"
        targets[4].textContent = event.target.id.toUpperCase()}
    if( event.target.id === "rock" ){
        targets[0].textContent = "Beats scissor. " + "Beaten by paper."}
    if( event.target.id === "paper" ){
        targets[0].textContent = "Beats rock.     " + "Beaten by scissor."}
    if( event.target.id === "scissor" ){
        targets[0].textContent = "Beats paper.     " + "Beaten by rock."}}

function check_winner( event, compHand ){
    let num = 0;
    targets[0].style.width = "100%"
    targets[0].style.height = "20%"
    for( let i=0; i<items.length; i++){
        if( event.target === items[i] ){
            num = (i+1)
            if (num === 4){ num = 1 }}}
    if( event.target === compHand ){
        targets[0].textContent = "ITS A TIE!"
        targets[4].style.backgroundColor = "rgb(248, 248, 206)"
        targets[5].style.backgroundColor = "rgb(248, 248, 206)"}
    else if( compHand === items[num] ){
        targets[0].textContent = "COMP WIN!"
        targets[4].style.backgroundColor = "rgb(253, 217, 217)"
        targets[5].style.backgroundColor = "rgb(224, 253, 217)"
        targets[3].textContent = String(Number(targets[3].textContent)+1)}
    else{
        targets[0].textContent = "PLAYER WINS!"
        targets[4].style.backgroundColor = "rgb(224, 253, 217)"
        targets[5].style.backgroundColor = "rgb(253, 217, 217)"
        targets[1].textContent = String(Number(targets[3].textContent)+1)}}

function click_button( event ){
    if( event.target.id === "rock" || event.target.id === "paper" || event.target.id === "scissor" ){
        for ( let i=0; i<items.length; i++ ){
            if( i===0 || i===4 ){
                items[i].style.visibility = "visible"
            }else{ items[i].style.visibility = "hidden"}}
        let compHand = items[Math.floor(Math.random()*3)+1]
        targets[5].textContent = compHand.id.toUpperCase();
        targets[5].style.backgroundImage = "url("+ compHand.id +".png)"
        check_winner( event, compHand )}
    else if ( event.target.id === "res" ){
        targets[0].textContent = ""
        targets[1].textContent = 0
        targets[2].textContent = 1
        targets[3].textContent = 0
        for ( let i=4; i<targets.length; i++ ){
            targets[i].textContent = "";
            targets[i].style.backgroundImage = "none";
            targets[i].style.backgroundColor = "white";}
            for ( let i=0; i<items.length; i++ ){
                if( i===0 || i===4 ){
                    items[i].style.visibility = "hidden"}
                else{ items[i].style.visibility = "visible"}}}
    else if ( event.target.id === "start" ){
        targets[2].textContent = String(Number(targets[2].textContent)+1)
        targets[0].textContent = ""
        for ( let i=4; i<targets.length; i++ ){
            targets[i].textContent = "";
            targets[i].style.backgroundImage = "none";
            targets[i].style.backgroundColor = "white";}
            for ( let i=0; i<items.length; i++ ){
                if( i===0 || i===4 ){
                    items[i].style.visibility = "hidden"
                }else{ items[i].style.visibility = "visible"}}}}

addEventListener("mouseover", over_button)
addEventListener("click", click_button)
