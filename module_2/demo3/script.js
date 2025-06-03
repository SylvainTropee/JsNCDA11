class Menu{

    _starter
    mainDish
    dessert
    #price

    constructor(starter, mainDish, dessert, price = 0) {
        this._starter = starter
        this.mainDish = mainDish
        this.dessert = dessert
        this.#price = price
    }

    description (){
        return `Entrée : ${this._starter}, Plat : ${this.mainDish}, Dessert : ${this.dessert}`
    }
    get starter(){
        return this._starter
    }

    get price(){
        return this.#price
    }
    set price(value){
        this.#price = value
    }

}

const menu1 = new Menu("entrée1", "plat1", "dessert1", 12)
const menu2 = new Menu("entrée2", "plat2", "dessert2", 20)
const menu3 = new Menu("entrée3", "plat3", "dessert3")

console.log(menu1)
console.log(menu2)
menu3.price = 4567
console.log(menu3.price)

//fonctionnalités ES6
//separator
const million = 1_000_000
console.log(million)

//opérateur de nullité

let user = {
    name : 'Michel',
    address : null
}

console.log(user.address?.street ?? "Rue des acacias")

//spread
let tab1 = [1,2,3]
let tab2 = [4,5,6]

tab1.push(...tab2)
console.log(tab1)

function test(...args){
    console.log(args)
}
test(1, "gfkjgk", 1234)







