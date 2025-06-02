const multiply = require('./script.js')

describe("Premier scénario de test", () => {

    it("Vrai = vrai ?", () => {
        expect(true).toBe(true)
    })

    it("La mutiplication est bonne", () => {
        expect(multiply(10,2)).toBe(20)
    })

    it("La mutiplication n'est  pas bonne", () => {
        expect(multiply(10,2)).not.toBe(150)
    })

})