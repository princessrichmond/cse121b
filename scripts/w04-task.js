/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let photoElement = document.querySelector("#photo");
let myProfile = {
    name: "Princess Richmond",
    photo: {
        src:"images/m.jpg",
        alt: "My Profile Picture"
    },
    favoriteFoods: ["Lechon", "Fried Chicken", "Steak", "Fish", "Pancit"],
    hobbies: ["Watching", "Sewing", "Hiking"],
    placedLived: [{}
        // {
        // place: "Tarlac, PH",
        // length: "24 years",
        // },
        // {
        // place: "Noblesville, IN",
        // length: "2 years"
        // },
    ],
};


/* Populate Profile Object with placesLive objects */
myProfile.placedLived.push(
    {
    place: "Tarlac, PH",
    length: "24 years",
    }
);
myProfile.placedLived.push(
    {
    place: "Noblesville, IN",
    length: "2 years",
    }
);



/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement("li");
    li.textContent = hobbies;
    document.querySelector("#hobbies").appendChild(li);
});



/* Places Lived DataList */
myProfile.placedLived.forEach(place =>  {
    let dt = document.createElement("dt");
    dt.textContent = place;
    let dd = document.createElement("dd");
    dd.textContent = length;

    document.querySelector("#places-lived").appendChild(dt, dd);
});
