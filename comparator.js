// Assume that the structure is same along with the order

function Comparator(path_1, lineNumberFetcher, numberToIgnore = 0) {
  this.path_1 = path_1;
  this.lineNumberFetcher = lineNumberFetcher;
  this.numberToIgnore = numberToIgnore;
  this.reportPrintFunc = undefined;
}

Comparator.prototype.compare = function (obj1, obj2) {
  let matched = this.compareInternal(obj1,obj2);
  if(!matched && this.reportPrintFunc) {
    this.reportPrintFunc();
  }
  return matched;
}

Comparator.prototype.compareInternal = function (obj1, obj2) {
  if (this.isJsonObject(obj1)) {
    let part1 = Object.entries(obj1);
    let part2 = Object.entries(obj2);
    if (part1.length != part2.length) {
      return false;
    }
    for (let i = 0; i < part1.length; i++) {
      let keyVal1 = part1[i];
      let keyVal2 = part2[i];
      // Order is same
      let val1 = keyVal1[1];
      let val2 = keyVal2[1];
      if (!this.matchUtilWrapper(val1, val2)) {
        return false;
      }
    }
    return true;
  } else if (this.isJsonArray(obj1)) {
    // Iterate through the array
    // To avoid duplicate matching, we will have remove objects from second array if it
    // has already matched with anything
    let indexOfAlreadyMatchedObjects = {};
    for (let i = 0; i < obj1.length; i++) {
      let val1 = obj1[i];
      let found = false;
      for (let j = 0; j < obj2.length; j++) {
        if (j in indexOfAlreadyMatchedObjects) {
          continue;
        }
        let val2 = obj2[j];
        if (this.matchUtilWrapper(val1, val2)) {
          found = true;
          indexOfAlreadyMatchedObjects[j] = true;
          break;
        }
      }
      if (!found) {
        return false;
      }
    }
    return true;
  }
};

Comparator.prototype.matchUtilWrapper = function (val1, val2) {
  if (!this.matchUtil(val1, val2)) {
    // Print Line Number as well
    if (this.lineNumberFetcher && this.isNotArrayOrObject(val1)) {
      this.reportPrintFunc= this.generateReportFunc(val1);
    }
    return false;
  } else {
    return true;
  }
};

Comparator.prototype.generateReportFunc = function(val1) {
  return function() {
    this.lineNumberFetcher.printReport(val1, this.path_1);
  }
}

Comparator.prototype.matchUtil = function (val1, val2) {
  if (this.isNotArrayOrObject(val1)) {
    if (val1 != val2) {
      // check if this is a number
      if (!isNaN(val1)) {
        let diff = val1 - val2;
        if (diff < 0) {
          diff = -1 * diff;
        }
        if (diff > this.numberToIgnore) {
          return false;
        } else {
          return true;
        }
      }
      return false;
    } else {
      return true;
    }
  } else {
    if (!this.compareInternal(val1, val2)) {
      return false;
    } else {
      return true;
    }
  }
};
Comparator.prototype.isJsonObject = function isJsonObject(data) {
  return !Array.isArray(data) && data instanceof Object;
};
Comparator.prototype.isJsonArray = function isJsonArray(data) {
  return Array.isArray(data);
};

Comparator.prototype.isNotArrayOrObject = function isNotArrayOrObject(data) {
  return !(data instanceof Object || data instanceof Array);
};
// module.exports = {
//   isNotArrayOrObject: isNotArrayOrObject,
//   compare: compare,
//   isJsonObject: isJsonObject,

// };

module.exports = Comparator;
