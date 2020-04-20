let lineNumber = require('line-number');

function fetch(textToSearch) {
    var re = "/"+textToSearch+"[^,]+/g";
    // /^123456$/
    console.log(lineNumber(rawFile, re));
}

module.exports = {
    fetch : fetch
}