//Function Expression
//this is defined at runtime i.e when the function is called
var canada = () => {
console.log("Canada is awesome!")
}

//function Declaration
//This function gets defined at parsetime ie when the compiler initially looks at the code and starts hoisting or allocating memory
function kenya()
{
        console.log("Kenya is also awesome")
}

//invoking/calling the functions
canada();
kenya();