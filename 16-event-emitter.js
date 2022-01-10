const EventEmitter = require("events");

const customEmitter = new EventEmitter();

// method
// on: listen for specific event
// emit: emit(fire off) the event


customEmitter.on('response',(name, id) => {

    console.log(`data received name is ${name} with id: ${id}`);
})


customEmitter.on('response',()=>{
    

    console.log(`data received`)
})
 
customEmitter.emit('response', 'john', 34)