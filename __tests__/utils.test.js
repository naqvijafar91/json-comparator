let Comparator = require("./../comparator");
describe("Not Array or Object util", () => {
   let comparator = new Comparator();
    it("should judge array or object part 1", () => {
      let obj1 = {
        a: "b",
        b: "b"
      };
      expect(comparator.isNotArrayOrObject(obj1)).toEqual(false);
    });
    it("should judge array or object part 2", () => {
      let obj1 = ["a"];
      expect(comparator.isNotArrayOrObject(obj1)).toEqual(false);
    });
    it("should judge array or object part 3", () => {
      let obj1 = "a";
      expect(comparator.isNotArrayOrObject(obj1)).toEqual(true);
    });
    it("should judge array or object part 4", () => {
      let obj1 = 5;
      expect(comparator.isNotArrayOrObject(obj1)).toEqual(true);
    });
});

describe("Json Object util", () => {
  let comparator = new Comparator();
    it("should judge array or object part 1", () => {
      let obj1 = {
        a: "b",
        b: "b"
      };
      expect(comparator.isJsonObject(obj1)).toEqual(true);
    });
    it("should judge array or object part 2", () => {
      let obj1 = ["a"];
      expect(comparator.isJsonObject(obj1)).toEqual(false);
    });
    it("should judge array or object part 3", () => {
      let obj1 = "a";
      expect(comparator.isJsonObject(obj1)).toEqual(false);
    });
    it("should judge array or object part 4", () => {
      let obj1 = 5;
      expect(comparator.isJsonObject(obj1)).toEqual(false);
    });
    it("should judge array or object part 5", () => {
        let obj1 = {
          a: "b",
          b: "b",
          c:{
            a: "b",
            b: "b"
          }
        };
        expect(comparator.isJsonObject(obj1)).toEqual(true);
      });
      it("should judge array or object part 6", () => {
        let obj1 = {
          a: "b",
          b: "b",
          c:[{
            a: "b",
            b: "b"
          }]
        };
        expect(comparator.isJsonObject(obj1)).toEqual(true);
      });
  });