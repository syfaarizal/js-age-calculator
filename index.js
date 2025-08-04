const birthYear = prompt("Enter your birth year: ");
const birth = parseInt(birthYear);
const currentYear = new Date().getFullYear();
const age = currentYear - birth;
const nextYear = age + 1;

if (isNaN(birth)) {
    console.log("Invalid input. Please enter a valid birth year.");
} else if (birth > currentYear) {
    console.log("Are you from the future? 🛸");
} else {
    console.log(`You were born in ${birthYear}.\nThe current year is ${currentYear}.\nThat means you're ${age} years old 🎉\nNext year you'll be ${nextYear} years old.`);
}
          