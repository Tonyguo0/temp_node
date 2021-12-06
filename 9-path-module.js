const path = require("path");

console.log(path.sep);
// console.log(path);

const filePath = path.join(__dirname, "content", "subfolder", "test.txt");

console.log(__dirname,filePath);

const base = path.basename(filePath);
console.log(base);

// absolute path path.resolve: accepts a sequence of path or path segments and resolves into an absolute

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
