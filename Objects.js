let movieSet = {
                Employees:{
                        'hands on staff':['cleaners','gardeners'], //attributes that have spaces are put in single or double quotes
                        fullTimeStaff:{
                                        actors:{
                                                name:'Atty',
                                                Age:22,
                                                year:2010
                                                },

                                        actresses:{
                                                name:'Rey',
                                                Age:23,
                                                year:2011
                                                }
                                }

                },

                Bosses:
                        {
                        directors:{
                                name:'Camilla',
                                year:1990
                                }
                        }
}

//looping throught object fullTimeStaff in object Employees in object movieSet using the for...in loop
for(let actorsAndActresses in movieSet.Employees.fullTimeStaff)
{
  console.log(`\n\n ${actorsAndActresses} \n name: ${movieSet.Employees.fullTimeStaff[actorsAndActresses].name} \n Age: ${movieSet.Employees.fullTimeStaff[actorsAndActresses].Age} \n year: ${movieSet.Employees.fullTimeStaff[actorsAndActresses].year}`)
}

//Accessing and element in an array within an object
console.log(` \n\n The ${movieSet.Employees['hands on staff'][1]} are second at index 1 after cleaners at index 0.`);

//Altering objects. Adding age to the object directors which is in object bosses which is in object movieSet
movieSet.Bosses.directors.age=34;
//outputting the altered object
console.log(`\n\n name:${movieSet.Bosses.directors.name} \n year: ${movieSet.Bosses.directors.year} \n age:${movieSet.Bosses.directors.age} \n\n`) 