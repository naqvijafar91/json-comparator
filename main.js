let fs = require("fs");
let Comparator = require("./comparator");
let LineNumberFetcher =  require('./linenumberfetcher');
var myArgs = process.argv.slice(2);

let path_1 = "./sample/ct_old.json";
let path_2 = "./sample/ct_new.json";

if (myArgs[0]) {
  path_1 = myArgs[0];
  path_2 = myArgs[1];
}

let first = JSON.parse(fs.readFileSync(path_1, "utf8"));
let second = JSON.parse(fs.readFileSync(path_2, "utf8"));

let comparator = new Comparator(path_1,new LineNumberFetcher());
console.log(comparator.compare(first, second));
