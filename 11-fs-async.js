// async blocking
const { readFile, writeFile } = require("fs");

// provide callback: run the call back when we're done, so what ever function is complete then we run callback
// have to call the second readfile inside the first call back else we can't use the result from the first callback to write to a new file
console.log("start") 
// read first file
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  // read second file
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    // write to both of the first and second file 
    writeFile(
      "./content/result-sync.txt",
      `Here is the result : ${first}, ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        // this will log after the 
        // console log "starting with next task"
        // THIS IS BECAUSE the moment we start the task it offloads and continue with our code 
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task")