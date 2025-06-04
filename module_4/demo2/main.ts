//variables
let age: number = 26
// age = "coucou"
let job: any = "Dev"
job = 42

class Job implements Manageable{
    private _name: string

    constructor(
        name: string,
        private salary: number = 0
    ) {
        this._name = name
    }

    public display(){
        console.log(this._name, this.salary)
    }
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    hierarchy: { name: string; responsable: string };
    lvlHierarchy: number;

    getHierarchy(): number {
        return 0;
    }
}

let dev = new Job("Dev", 60_000)
let admin = new Job("Admin")

dev.display()
admin.display()


interface Manageable{
    lvlHierarchy : number
    hierarchy : {
        name : string,
        responsable : string
    }
    getHierarchy() : number
}

let manager : Manageable = {
    lvlHierarchy : 12,
    getHierarchy(): number {
        return this.lvlHierarchy
    },
    hierarchy : {
        name : "Michel",
        responsable : "Directeur commercial"
    }
}





