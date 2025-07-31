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
