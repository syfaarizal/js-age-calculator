# 🧮 JavaScript Challenge — Day 2: Age Calculator

This is part of my daily JavaScript challenge (Code Sprint 30).  
In this challenge, I'm building an age calculator program based on user's birth year input.

## 🎯 Challenge Goals

- Learn to get user input
- Practice basic `if-else` logic
- Use `Date` object to get current year
- Prevent data type errors with `parseInt()`
- Handle invalid user input
- Format output for better readability

---

## 💻 Program Description

The program will:
1. Ask user to enter their **birth year**
2. Calculate their **current age**
3. Display a message like:

<pre><code>
You were born in 2005.
Current year is 2025.
That means you're 20 years old 🎉
Next year you'll be 21 years old.
</code></pre>


If user input is invalid (letters or empty), the program will show a warning.
If user enters a future birth year, it will display:

<pre><code>Are you from the future? 🛸</code></pre>


---

## 📦 Main Source Code

```js
const birthYear = prompt("Enter your birth year: ");
const bornYear = parseInt(birthYear);
const currentYear = new Date().getFullYear();
const age = currentYear - bornYear;
const nextYearAge = age + 1;

if (isNaN(bornYear)) {
    console.log("Invalid input. Please enter a valid birth year.");
} else if (bornYear > currentYear) {
    console.log("Are you from the future? 🛸");
} else {
    console.log(`You were born in ${birthYear}.\nCurrent year is ${currentYear}.\nThat means you're ${age} years old 🎉\nNext year you'll be ${nextYearAge} years old.`);
}
```

## 📌 Author

Made with logic and a bit of humor by  
**Syifa Fauziyah Arizal**  
[GitHub](https://github.com/syfaarizal) • [Portfolio](https://syfaarizal.github.io/sicoder-main-portfolio/)

---

> “Logic might be binary, but the way we treat users shouldn't be.”  
> Let’s go to [Day 3: Interactive Mini Calculator](https://github.com/syfaarizal/js-mini-calculator) 📝