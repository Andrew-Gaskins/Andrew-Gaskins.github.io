// var userChoice
// var userChoice = prompt("Do you choose rock, paper or scissors?");

function computerChoice() {
    var choice = Math.random();
    if (choice < 0.34) {
    	choice = "Rock";
    } else if(choice <= 0.67) {
    	choice = "Paper";
    } else {
    	choice = "Scissors";
    }
    return choice;
}

var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        return "It's a tie. Try again"
    }
    else if (choice1 === "Rock") {
        if (choice2 === "Scissors") {
            return "Rock crushes scissors. You win."
        }
        else {
            return "Paper covers rock. You lose."
        }
    }    
    else if (choice1 === "Paper") {
        if (choice2 === "Rock") {
            return "Paper covers rock. You win."
        }
        else {
            return "Scissors cuts paper. You lose."
        }
    }    
    else if (choice1 === "Scissors") {
        if (choice2 ==="Paper") {
            return "Scissors cuts paper. You win."
        }
        else {
            return "Rock crushes paper. You lose."
        }
    }
    else {
        return "You made an invalid selection. Great job."
    }
}



$('#rock').click(function() {
    var compplay = computerChoice()
    console.log(compplay);
	$('#useranswer').html("Rock");
	$('#companswer').html(compplay);
  $('#results').html(compare("Rock", compplay));
  });

$('#paper').click(function() {
    var compplay = computerChoice()
    console.log(compplay);

	$('#useranswer').html("Paper");
	$('#companswer').html(compplay);
  $('#results').html(compare("Paper", compplay));
  });

$('#scissors').click(function() {
    var compplay = computerChoice()
    console.log(compplay);

	$('#useranswer').html("Scissors");
	$('#companswer').html(compplay);
  $('#results').html(compare("Scissors", compplay));
  });





