const amount = 9

if(amount <10){
    console.log('small number');

}
else{
    console.log('large number');
}

console.log(`hello world is my first node app!!!`)

// CommonJS, every file is Modules (by default)
// Modules - Encapsulated Code (only share minimum)
// *** EVERY TIME WE START OUR OWN MODULE WE NEED TO START WITH .
const names = require(`./4-names`);
console.log(names)
const sayHi = require('./5-utils');
console.log(sayHi(names))
const data = require('./6-alternative-flavor')
console.log(data)
require('./7-mind-grenade')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter) 