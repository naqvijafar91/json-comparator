let Comparator = require("../comparator");

describe("Comparator", () => {
  it("should compare flat object", () => {
    let obj1 = {
      a: "b",
      b: "b"
    };
    let obj2 = {
      a: "b",
      b: "b"
    };
    let comparator = new Comparator();
    expect(comparator.compare(obj1, obj2)).toEqual(true);
  });
  it("should ignore number diff equal to 1", () => {
    let obj1 = {
      b: 3
    };
    let obj2 = {
      b: 2
    };
    let comparator = new Comparator();
    expect(comparator.compare(obj1, obj2)).toEqual(true);
  });
  it("should compare nested object", () => {
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
        b: "b"
      }
    };
    let comparator = new Comparator();
    expect(comparator.compare(obj1, obj2)).toEqual(true);
  });
  it("should compare flat json array", () => {
    let obj1 = [
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
    ];
    let obj2 = [
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
    ];
    let comparator = new Comparator();
    expect(comparator.compare(obj1, obj2)).toEqual(true);
  });

  it("should compare nested json array", () => {
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
      let comparator = new Comparator();
    expect(comparator.compare(obj1, obj2)).toEqual(true);
  });
});
