let Comparator = require("../comparator");

describe("Advanced tests",()=>{
  let comparator = new Comparator();
    it("should give false when object is diff part 1",()=>{

        let obj1 = [
            {
              a: "b",
              b: "b",
              c: {
                a: "b",
                b: "b"
              },
              d: [
                {
                  a: "b",
                  b: "b",
                  c: {
                    a: "b",
                    b: "b"
                  }
                },
                {
                  a: "b",
                  b: "b",
                  c: {
                    a: "different",
                    b: "b"
                  }
                }
              ]
            },
            {
              a: "b",
              b: "b",
              c: {
                a: "b",
                b: "b"
              }
            }
          ];
          let obj2 = [
              {
                a: "b",
                b: "b",
                c: {
                  a: "b",
                  b: "b"
                },
                d: [
                  {
                    a: "b",
                    b: "b",
                    c: {
                      a: "b",
                      b: "b"
                    }
                  },
                  {
                    a: "b",
                    b: "b",
                    c: {
                      a: "b",
                      b: "b"
                    }
                  }
                ]
              },
              {
                a: "b",
                b: "b",
                c: {
                  a: "b",
                  b: "b"
                }
              }
            ];
            expect(comparator.compare(obj1, obj2)).toEqual(false);
    });

    it("should give false when obj is diff part 2",()=>{
        let obj1 = {
            a: "b",
            b: "b"
          };
        let obj2 = {
            a: "b",
            b: "diff"
          };
        expect(comparator.compare(obj1, obj2)).toEqual(false);
    });


    it("should give false when obj is diff part 3",()=>{
        let obj1 = {
            a: "b",
            b: "b",
            c: {
                a: "b",
                b: "b"
              }
          };
        let obj2 = {
            a: "b",
            b: "b",
            c: {
                a: "b",
                b: "diff"
              }
          };
        expect(comparator.compare(obj1, obj2)).toEqual(false);
    });

    it("should give false when obj is diff part 4",()=>{
        let obj1 =  [{
                a: "b",
                b: "b"
              },
              {
                a: "b",
                b: "b"
              }
            ];
        let obj2 =[{
            a: "b",
            b: "b"
          },
          {
            a: "b",
            b: "diff"
          }
        ];
        expect(comparator.compare(obj1, obj2)).toEqual(false);
    });

    it("should give false when obj is diff part 5",()=>{
        let obj1 =  [{
                a: "b",
                b: "b",
                c:"b"
              },
              {
                a: "b",
                b: "b"
              }
            ];
        let obj2 =[{
            a: "b",
            b: "b",
            c:"diff"
          },
          {
            a: "b",
            b: "b"
          }
        ];
        expect(comparator.compare(obj1, obj2)).toEqual(false);
    });
});