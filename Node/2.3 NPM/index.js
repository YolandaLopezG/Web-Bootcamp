import generateName from 'sillyName';
import superheroes from 'superheroes';


var sillyName = generateName();
console.log(`My silly name is ${sillyName}`);

var superheroName = superheroes.random();
console.log(`I'm ${superheroName}`);
