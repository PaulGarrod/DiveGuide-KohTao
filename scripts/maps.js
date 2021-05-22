const mapData = [{
    name: "Twins",
    rating: 6,
    image: "https://images.unsplash.com/photo-1586508577428-120d6b072945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    maxDepth: 20,
    marineLife: ["Nemo", "Moray Eels", "Bat Fish"],
    highlights: ["Nemo Family", "Batfish Cave", "Deep Pinnacle", "Pee Wee Drop Off"],
    id: 1
}, {
    name: "Japenese Gardens",
    rating: 4,
    image: "https://images.unsplash.com/photo-1583364493238-248032147fbd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    maxDepth: 16,
    marineLife: ["Juvenille Sweet Lips"],
    highlights: ["Coral Gardens"],
    id: 2
}, {
    name: "White Rock",
    rating: 8,
    image: "https://images.unsplash.com/photo-1510637858650-c3be04731622?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    maxDepth: 24,
    marineLife: ["Blue Spoted Ray"],
    highlights: ["South Swim Through"],
    id: 3
}];

const mapNames = mapData.map(e => e.name);
const marineLifeList = mapData.map(e => e.marineLife);

const parentContainer = document.querySelector("#maps-main-container");
const mapsNav = document.querySelector("#maps-nav");

const divEl = document.createElement("DIV");
const mainEl = document.createElement("MAIN");
const sectionEl = document.createElement("SECTION");
const navEl = document.createElement("NAV");
const h4El = document.createElement("H4");

mapData.forEach(
    i => {
        
        const outerContainer = document.createElement("DIV");
        parentContainer.appendChild(outerContainer).setAttribute("class", "outer-container");
        outerContainer.appendChild(document.createElement("DIV")).setAttribute("id", `maps-main-info${i.id}`);


        outerContainer.appendChild(document.createElement("DIV")).setAttribute("id", `maps-main-map${i.id}`);
        document.querySelector(`#maps-main-map${i.id}`).appendChild(document.createElement("IMG")).setAttribute("class", "mapImage");

        outerContainer.appendChild(document.createElement("DIV")).setAttribute("id", `maps-main-data${i.id}`);
        
    }

)




// function to handle click event
const handleMapClick = (e) => {

    const index = mapNames.indexOf(e.target.innerHTML);

    let newRating = document.createElement("P");
    rating.innerHTML = `Overall Rating: ${mapData[index].rating}/ 10`;
    rating.parentNode.replaceChild(newRating, rating);
    
    let depth = document.createElement("P");
    depth.innerHTML = `Maximum Depth: ${mapData[index].maxDepth} meters`;
    mapsLeft.prepend(depth);
    
    let siteName = document.createElement("H3");
    siteName.innerHTML = `Site Name: ${mapData[index].name}`;
    mapsLeft.prepend(siteName);
    
    mapData[index].marineLife.forEach(
        i => {
            let fish = document.createElement("LI");
            fish.innerHTML = i;
            mapsMarineLifeList.appendChild(fish);
        }
    )
    
    mapData[index].highlights.forEach(
        i => {
            let highlight = document.createElement("LI");
            highlight.innerHTML = i;
            mapsAskTheInstructorList.appendChild(highlight);
        }
    )
    
    let mapImage = document.createElement("IMG");
    mapImage.src = mapData[index].image;
    mapImage.classList = "mapImage";
    mapsRight.append(mapImage);

}

mapNames.forEach(
    i => {
        let mapLink = document.createElement("A");
        mapLink.innerHTML = i;
        mapsNav.appendChild(mapLink);
        mapLink.addEventListener("click", handleMapClick);
    },
)


