//variables
var age = 26;
// age = "coucou"
var job = "Dev";
job = 42;
var Job = /** @class */ (function () {
    function Job(name, salary) {
        if (salary === void 0) { salary = 0; }
        this.salary = salary;
        this._name = name;
    }
    Job.prototype.display = function () {
        console.log(this._name, this.salary);
    };
    Object.defineProperty(Job.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Job.prototype.getHierarchy = function () {
        return 0;
    };
    return Job;
}());
var dev = new Job("Dev", 60000);
var admin = new Job("Admin");
dev.display();
admin.display();
var manager = {
    lvlHierarchy: 12,
    getHierarchy: function () {
        return this.lvlHierarchy;
    },
    hierarchy: {
        name: "Michel",
        responsable: "Directeur commercial"
    }
};
