// var userChoice
// var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "Rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "Paper";
} else {
	computerChoice = "Scissors";
}


// $('.choice').click(function() {
// 	$('#useranswer').html(userChoice);
// 	$('#companswer').html(computerChoice);
//   $('#results').html(compare(userChoice, computerChoice));
//   });

$('#rock').click(function() {
	$('#useranswer').html("Rock");
	$('#companswer').html(computerChoice);
  $('#results').html(compare("Rock", computerChoice));
  });

$('#paper').click(function() {
	$('#useranswer').html("Paper");
	$('#companswer').html(computerChoice);
  $('#results').html(compare("Paper", computerChoice));
  });

$('#scissors').click(function() {
	$('#useranswer').html("Scissors");
	$('#companswer').html(computerChoice);
  $('#results').html(compare("Scissors", computerChoice));
  });



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



