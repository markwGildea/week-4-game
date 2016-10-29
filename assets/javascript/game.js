var counter;

var playerScoreCounter = {
		score: 0,
		wins: 0,
		
var randomNumber = Math.round(Math.random() * totalScore);

// if their totalScore === the random number from the beginning of the game, player wins!

// if their totalScore goes > the random number, player loses!

// * The game restarts whenever the player wins or loses.
// * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
}
window.onload = function(){
    $('#crystal1').on('click', stopwatch.recordLap);
    $('#crystal2').on('click', stopwatch.stop);
    $('#crystal3').on('click', stopwatch.reset);
    $('#crystal4').on('click', stopwatch.start);
};