//Creation phase
//Hoisting taking place in the global execution context
var favorightFood = undefined;
var foodThoughts = undefined;

//Enter Execution phase
//favoriteFood gone through and seen as assigned grapes


var favouriteFood = "grapes";
////we enter another context which is foodThoughts
//foodThoughts is seen as to be assigned a function
//and at the end we see foodthoughts id encoked
//Therefore we go back to the function
var foodThoughts = function () {
//since this is another execution context.we start again
//we enter creation phase on foodThoughts execution context
//hoisting then takes place
var favouriteFood= undefined;
//hoisting is done
//we resume execution
//the console.log will display the sentence and favorightFood will be undefined as that is what it was assigned during hoisting
     console.log("Original favourite food: " + favouriteFood);

//favorightFood is assigned sushi

     var favouriteFood = "sushi";
//therefore output for cnsole will be the sentence + the newly assigned sushi
     console.log("New favourite food: " + favouriteFood);
};

foodThoughts()
