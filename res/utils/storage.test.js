const rewire = require("rewire")
const storage = rewire("./storage")
const Storage = storage.__get__("Storage")
// @ponicode
describe("get", () => {
    let inst

    beforeEach(() => {
        inst = new Storage()
    })

    test("0", () => {
        let callFunction = () => {
            inst.get("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.get("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.get("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.get(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("set", () => {
    let inst

    beforeEach(() => {
        inst = new Storage()
    })

    test("0", () => {
        let callFunction = () => {
            inst.set("Elio", "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.set("Elio", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.set("elio@example.com", "Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.set("elio@example.com", "elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.set("Dillenberg", "Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.set(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("delete", () => {
    let inst

    beforeEach(() => {
        inst = new Storage()
    })

    test("0", () => {
        let callFunction = () => {
            inst.delete("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.delete("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.delete("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.delete(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("clear", () => {
    let inst

    beforeEach(() => {
        inst = new Storage()
    })

    test("0", () => {
        let callFunction = () => {
            inst.clear()
        }
    
        expect(callFunction).not.toThrow()
    })
})
