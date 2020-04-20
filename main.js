#!/usr/bin/env node
let fs = require("fs");
let Comparator = require("./comparator");
let LineNumberFetcher = require("./linenumberfetcher");

let path_1 = "./sample/ct_old.json";
let path_2 = "./sample/ct_new.json";
let diffNumToIgnore = 0;

const args = require("yargs").argv;

if (!args.first && !args.second) {
  console.log("No files specified");
  return;
}
path_1 = args.first;
path_2 = args.second;
diffNumToIgnore = args.ignorediff;
if(!diffNumToIgnore) {
    diffNumToIgnore = 0;
}
console.log(
  `Finding diff for files at path: ${path_1} and ${path_2} and ignore numerical difference of ${diffNumToIgnore}`
);

let first = JSON.parse(fs.readFileSync(path_1, "utf8"));
let second = JSON.parse(fs.readFileSync(path_2, "utf8"));

let comparator = new Comparator(
  path_1,
  new LineNumberFetcher(),
  diffNumToIgnore
);
if (comparator.compare(first, second)) {
  console.log("No difference found in file");
}
