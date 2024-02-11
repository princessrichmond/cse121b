/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    // console.log("Displaying temples:", temples);
    temples.forEach(temple => {
        // console.log("Displaying Temple", temple);
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;
        const imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const templeData = await response.json();
    // templeList = templeData;
    templeList.push(...templeData);
    //let templeList = templeData(); X
    displayTemples(templeList);
    // console.log(templeList)
};

/* reset Function */
// const reset = function(){
    function reset(){
    templesElement.innerHTML = "";

};

/* filterTemples Function */
const filterTemples = (temples) =>{
    reset();
    let filter = document.getElementById("filtered").value;
    // console.log("Filter selected:", filter);
    switch (filter){
        case "utah":
            let utahTemples = temples.filter(temple => temple.location.includes("Utah"));
            // console.log("Utah Temples:", utahTemples);
            displayTemples(utahTemples);
            break;

        case "notutah":
            let notutahTemples = temples.filter(temple => !temple.location.includes("Utah"));
            // console.log("Not Utah Temples", notutahTemples);
            displayTemples(notutahTemples);
            break;

        case "older":
            let olderTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            // console.log("Older Temples", olderTemples);
            displayTemples(olderTemples);
            break;
    
        case "all":
            displayTemples(temples);
            break;
    }
};


getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});