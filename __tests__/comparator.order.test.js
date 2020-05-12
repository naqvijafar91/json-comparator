let Comparator = require("../comparator");

describe("Should match if order is wrong",()=>{
    it("Simple Object order diff",()=>{
        let nestedObj1 = {
            sampleKey1 : "val1",
            sampleKey2 : "val2"
        };
        let nestedObj2 = {
            sampleKey1 : "val3",
            sampleKey2 : "val4"
        };
        let obj1 = {
            "products": [nestedObj1,nestedObj2]
          };
        let obj2 =  {
            "products": [nestedObj2,nestedObj1]
          };
          let comparator = new Comparator();
          expect(comparator.compare(obj1, obj2)).toEqual(true);
    });

    it("Nested Object order diff",()=>{
        let nestedNestedObj1 = {
            nestedKey1 : "nestedval1",
            nestedKey1 : "nestedval2"
        };
        let nestedNestedObj2 = {
            nestedKey1 : "nestedval3",
            nestedKey1 : "nestedval4"
        };
        let nestedObj1 = {
            sampleKey1 : "val1",
            sampleKey2 : "val2",
            details : [nestedNestedObj1,nestedNestedObj2]
        };
        let nestedObj2 = {
            sampleKey1 : "val3",
            sampleKey2 : "val4",
            details : [nestedNestedObj2,nestedNestedObj1]
        };
        let obj1 = {
            "products": [nestedObj1,nestedObj2]
          };
        let obj2 =  {
            "products": [nestedObj2,nestedObj1]
          };
          let comparator = new Comparator();
          expect(comparator.compare(obj1, obj2)).toEqual(true);
    });
});