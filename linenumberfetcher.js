let lineNumber = require("line-number");
let fs = require("fs");
const lineReader = require("line-reader");

function LineNumberFetcher() {}
LineNumberFetcher.prototype.printReport = function (textToSearch, path) {
  let lineNumber = 0;
  lineReader.eachLine(path, { encoding: "utf8" }, function (line) {
    lineNumber++;
    if (line.includes(textToSearch)) {
      console.log(`Found difference at Line: ${lineNumber} : ${line}`);
      return false; // stop reading
    }
  });
};

module.exports = LineNumberFetcher;
