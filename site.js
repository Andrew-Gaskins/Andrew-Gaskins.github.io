// var userChoice
// var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}


// $('.choice').click(function() {
// 	$('#useranswer').html(userChoice);
// 	$('#companswer').html(computerChoice);
//   $('#results').html(compare(userChoice, computerChoice));
//   });

$('#rock').click(function() {
	$('#useranswer').html("rock");
	$('#companswer').html(computerChoice);
  $('#results').html(compare("rock", computerChoice));
  });

$('#paper').click(function() {
	$('#useranswer').html("paper");
	$('#companswer').html(computerChoice);
  $('#results').html(compare("paper", computerChoice));
  });

$('#scissors').click(function() {
	$('#useranswer').html("scissors");
	$('#companswer').html(computerChoice);
  $('#results').html(compare("scissors", computerChoice));
  });



var compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        return "It's a tie. Try again"
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "Rock crushes scissors. You win."
        }
        else {
            return "Paper covers rock. You lose."
        }
    }    
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "Paper covers rock. You win."
        }
        else {
            return "Scissors cuts paper. You lose."
        }
    }    
    else if (choice1 === "scissors") {
        if (choice2 ==="paper") {
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



