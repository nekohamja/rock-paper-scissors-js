game();


function getComputerChoice(){
    const choice = Math.floor(Math.random()*3)+1;
    if (choice == 1) { return "rock"; }
    else if (choice == 2){ return "paper"; }
    else return "scissors";
}

function roundStart(player, computer){
    console.log(player);
    console.log(computer);
    if(player === computer){
        console.log("tie")
    }
    else if(player === 'rock'){
        if(computer === 'paper')
        {
            console.log("computer wins")
        } else {
            console.log("you win")
        }
    }    
    else if(player === 'paper'){
        if(computer === 'scissors')
        {
            console.log("computer wins")
        } else {
            console.log("you win")
        }
    }   
    else if(player === 'scissors'){
        if(computer === 'rock')
        {
            console.log("computer wins")
        } else {
            console.log("you win")
        }
    }
    
}

function game(){
    // 5 rounds
    const rounds = 6;
    for (let i = 1; i < rounds; i++) {
        console.log("round " + i);
        let player = prompt("round " + i + ": select your choice").toLowerCase();
        let computer = getComputerChoice();
        console.log(roundStart(player,computer));
    }
}

