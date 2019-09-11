//changing arguments into an array
function classList(name,course,year)
{
  console.log(arguments);
  console.log("\n");
  console.log(Array.from(arguments));
}
trip('Rey','Political Science','4th')
 console.log("\n\n" + 'Rest Parameters' + '\n');

//using rest parameters
function classList2(...argmnts)
{
  console.log(argmnts);
  console.log("\n");
  //accessing the arguments in the case where rest parameters is used
  console.log('Index 0 has:',argmnts[0],',while index 3 has:',argmnts[3]);
}

//one can input any number of arguments
trip2('Atty','IST','Applications','IST');