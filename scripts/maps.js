const mapData = [{
    name: "Twins",
    rating: 6,
    image: "https://images.unsplash.com/photo-1586508577428-120d6b072945?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    maxDepth: 20,
    marineLife: ["Nemo", "Moray Eels", "Bat Fish"],
    highlights: ["Nemo Family", "Batfish Cave", "Deep Pinnacle", "Pee Wee Drop Off"]
}, {
    name: "Japenese Gardens",
    rating: 4,
    image: "https://images.unsplash.com/photo-1583364493238-248032147fbd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    maxDepth: 16,
    marineLife: ["Juvenille Sweet Lips"],
    highlights: ["Coral Gardens"]
}, {
    name: "White Rock",
    rating: 8,
    image: "https://images.unsplash.com/photo-1510637858650-c3be04731622?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    maxDepth: 24,
    marineLife: ["Blue Spoted Ray"],
    highlights: ["South Swim Through"]
}];

const mapNames = mapData.map(e => e.name);

const mapsLeft = document.querySelector(".maps-main-left");
const mapsRight = document.querySelector(".maps-main-right");
const mapsMarineLifeList = document.querySelector(".marineLifeList");
const mapsAskTheInstructorList = document.querySelector(".askTheInstructorList");

const mapsNav = document.querySelector("#maps-nav");

const mapsContainer = document.querySelector("#maps-main-container");
const container = document.createElement("MAIN");
container.setAttribute("class", "maps-main-content");
const leftContainer = document.createElement("SECTION");
leftContainer.setAttribute("class", "maps-main-left");
const rightContainer = document.createElement("SECTION");
rightContainer.setAttribute("class", "maps-main-right");

mapData.forEach(
    i => {

        mapsContainer.appendChild(container);
        container.appendChild(leftContainer);
        container.appendChild(rightContainer);

        let rating = document.createElement("P");
        rating.innerHTML = `Overall Rating: ${i.rating}/ 10`;
        rating.setAttribute("id", "rating")
        leftContainer.prepend(rating);

        let depth = document.createElement("P");
        depth.innerHTML = `Maximum Depth: ${i.maxDepth} meters`;
        leftContainer.prepend(depth);

        let siteName = document.createElement("H3");
        siteName.innerHTML = `Site Name: ${i.name}`;
        leftContainer.prepend(siteName);

        
        i.marineLife.forEach(
            i => {
                const marineLifeList = document.createElement("UL");
                marineLifeList.innerHTML = "<h3>Cool Fish</h3>"
                leftContainer.append(marineLifeList)
                let fish = document.createElement("LI");
                fish.innerHTML = i;
                marineLifeList.appendChild(fish);
            }
        )

        i.highlights.forEach(
            i => {
                let highlight = document.createElement("LI");
                highlight.innerHTML = i;
                mapsAskTheInstructorList.appendChild(highlight);
            }
        )

        let mapImage = document.createElement("IMG");
        mapImage.src = i.image;
        mapImage.classList = "mapImage";
        mapsRight.append(mapImage);
    }
)




// function to handle click event
const handleMapClick = (e) => {

    const index = mapNames.indexOf(e.target.innerHTML);

    let newRating = document.createElement("P");
    rating.innerHTML = `Overall Rating: ${mapData[index].rating}/ 10`;
    rating.parentNode.replaceChild(newRating, rating);
    // mapsLeft.prepend(newRating);
    
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


