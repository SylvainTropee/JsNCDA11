const menu = {
    starter : "Paté",
    mainDish : "Moules-Frites",
    dessert: "Tiramisu",
    price : 14.50
}

menu.starter = "Huitre"
console.log(menu)
console.log(menu.mainDish)
menu.description = function (){
    return `Entrée : ${this.starter}, Plat : ${this.mainDish}, Dessert : ${this.dessert}`
}

console.log(menu.description)
console.log(menu.description())


function Menu(starter, mainDish, dessert, price = 0){
    this.starter = starter
    this.mainDish = mainDish
    this.dessert = dessert
    this.price = price
    this.description = function (){
        return `Entrée : ${this.starter}, Plat : ${this.mainDish}, Dessert : ${this.dessert}`
    }
}

const menu1 = new Menu("entrée1", "plat1", "dessert1", 12)
const menu2 = new Menu("entrée2", "plat2", "dessert2", 20)
const menu3 = new Menu("entrée2", "plat2", "dessert2")

console.log(menu1)
menu2.tips = 10
console.log(menu2)






