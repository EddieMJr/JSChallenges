// Challenge 1: Easy
'use strict';
function exercise(activity) {
    function exerciseDisplay() {
        // Interpolated String
        return `Today's Exercise: ${activity}`;
    }
    return exerciseDisplay();
}
// Output: Today's exercise: Running
console.log(exercise("Running"));
// Output: Today's exercise: Swimming
console.log(exercise("Swimming"));
// Output: Today's exercise: Dancing
console.log(exercise("Dancing"));
// Output: Today's exercise: Fencing
console.log(exercise("Fencing"));

// Challenge 2: Medium
'use strict';
function sharePizza(slices, eaters) {
    // Calculate the number of slices each person gets
    let split = slices / eaters;
    // Interpolated String
    return `Each person gets ${split} slices of pizza from our ${slices} slice pizza.`;
}
// Output: Each person gets 4 slices of pizza from our 8 slice pizza
console.log(sharePizza(8, 2));
// Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
console.log(sharePizza(8, 3));
// Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
console.log(sharePizza(21, 20));
// Output: Each person gets 3.33 slices of pizza; from our 10 slice pizza
console.log(sharePizza(10, 3));

// Challenge 3: Hard
'use strict';
function patients(name) {
    name = "John";
    function patientInfo() {
        const PII = {
            SSN: "123-45-6789",
            get getName() {
                return name;
            },
            get getSSN() {
                return this.SSN;
            }
        }
        return PII;
    }
    return patientInfo();
}
const patient2 = patients();
// Output: Undefined
console.log(patient2.name);
// Output: Undefined
console.log(patient2.ssn);
// Output: John
console.log(patient2.getName);
// Output: 123-45-6789
console.log(patient2.getSSN);

// Challenge 4: Very Hard
'use strict';
// Person Constructor w/ Properties
class Person{
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    // Exercise Method
    exercise() {
        console.log('Running is alright');
    }
    // FetchJob Method
    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);
    }
}
// Instances of 'Person' with Name, Job & Age
const person1 = new Person("Harold", "Backend Engineer", 20);
console.log(person1);
const person2 = new Person("Eddie", "Coding Apprentice", 21);
console.log(person2);

// Programmer Constructor w/ Inheretence of Person Constructor
class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
    }
    
    // Default value of true to busy
    busy = true;

    // Changes the value to false
    completeTask() {
        this.busy = false;
    }

    // Puts the value of true in a box
    acceptNewTask() {
        this.busy = true;
    }

    // Console Logs for each value
    offerNewTask() {
        if (this.busy === true) {
            console.log(`${this.name} can't accept any new tasks right now.`)
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`)
        }
    }

    // Lists the languages each Programmer has
    listLanguages() {
        console.log(this.languages);
    }

    // Adds a new language to the list of languages each programmer has
    learnLanguage(language) {
        this.languages.push(language);
    }
}

const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,["HTML", "CSS", "JS", "R"]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguages());
console.log(c2.listLanguages());
console.log(c3.listLanguages());
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob();
person2.exercise();
person2.fetchJob();