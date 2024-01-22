// /* W02-Task - Profile Home Page */

// /* Step 1 - Setup type tasks - no code required */

// /* Step 2 - Variables */
const fullName = "Princess Richmond";
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const profilePicture = "images/m.jpg";


// /* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

// /* Step 4 - Adding Content */
nameElement.innerHTML = `<strong> ${fullName} </strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile Image of ${fullName}.`);


/* Step 5 - Array */
let food = ["Steak", "Lechon", "Tacos", "Sinigang", "Fried Chicken", "Lumpia"];
document.getElementById("food").innerHTML = food;
food.push("Pancit")
document.getElementById("food").innerHTML += `<br>${food}`;
food.shift();
document.getElementById("food").innerHTML += `<br>${food}`;
food.pop();
document.getElementById("food").innerHTML += `<br>${food}`;