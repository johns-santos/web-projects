// Explicitely defined object
var housekeeper1 = {
    name : "rose",
    age : "34",
    yearsExp : 10,
    lang: ['English', 'Spanish'],
    pastEmp : ['Hilton', 'Hyatt', 'Best Western']
}
   
// 1) Construction function (factory) --------
// needs to start with CAPITAL CHARACTER and maps inputs
function HouseKeeper(name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.cleanRoom = function (){
        alert("Cleaning room in progress.");
    }

}


//2) Initialize object ---
// Invoke construction function (factory) to create new objects.
var houseKeeper1 = new HouseKeeper('Lisa', 23, true, ['English', 'Spanish']);

houseKeeper2 = new HouseKeeper('Alice', 32, true, ['English', 'Russian', 'German']);
houseKeeper3 = new HouseKeeper('Mary', 30, true, ['English', 'Russian', 'German']);
