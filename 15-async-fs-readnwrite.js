// https://www.freecodecamp.org/news/what-is-promise-in-javascript-for-beginners/
// node's native option
const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `This is AWESOME: ${first} ${second} \n`,
      { flag: "a" }
    );
    console.log(first);
    console.log(second);
  } catch (err) {
    console.log(err);
  }
};

start();

// refactor to async
// promise is a cleaner and more readable approach
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };


// only when promise here is resolved then we get our response
// getText("./content/first.txt")
// .then((result) => console.log(result))
// .catch((err) => console.log(err));
