const mapData = [{
    name: "Twins",
    rating: 6,
    image: "https://www.divepoint-kohtao.com/images/tauchplaetze/Twins.jpg",
    maxDepth: 20,
    marineLife: ["Nemo", "Moray Eels", "Bat Fish"],
    highlights: ["Nemo Family", "Batfish Cave", "Deep Pinnacle", "Pee Wee Drop Off"],
    id: 1
}, {
    name: "Japenese Gardens",
    rating: 4,
    image: "https://www.divepoint-kohtao.com/images/tauchplaetze/Japanese-Garden.jpg",
    maxDepth: 16,
    marineLife: ["Juvenille Sweet Lips", "Unicorn Fish", "Titan Trigger Fish"],
    highlights: ["Coral Gardens", "Artificial Reef"],
    id: 2
}, {
    name: "White Rock",
    rating: 8,
    image: "https://www.divepoint-kohtao.com/images/tauchplaetze/Twins.jpg",
    maxDepth: 24,
    marineLife: ["Blue Spoted Ray", "Hawksbill Turtle", "Banded Sea Krait"],
    highlights: ["South Swim Through", "White Rock Pinnacle", "Red Fire Coral"],
    id: 3
}, {
    name: "Aow Leuk",
    rating: 4,
    image: "https://www.divepoint-kohtao.com/images/tauchplaetze/Aow-Leuk.jpg",
    maxDepth: 18,
    marineLife: ["Juvenille Black Tip Reef Shark", "Reef Octopus", "Clown Trigger Fish"],
    highlights: ["Artificial Reef", "West Side Reefs"],
    id: 4
}, {
    name: "Green Rock",
    rating: 7,
    image: "https://www.divepoint-kohtao.com/images/tauchplaetze/Green-Rock.jpg",
    maxDepth: 28,
    marineLife: ["Titan Trigger Fish", "WhaleShark", "Green Turtle"],
    highlights: ["Titan Trigger Mating Pit", "Swim Throughs"],
    id: 5
}, {
    name: "Red Rock",
    rating: 6,
    image: "https://www.divepoint-kohtao.com/images/tauchplaetze/Red-Rock.jpg",
    maxDepth: 20,
    marineLife: ["Nudi Branches", "Tropical Fish", "Moray Eels"],
    highlights: ["Nangyuan Caves", "Drop off and swim to Japenese Gardens"],
    id: 6
}, {
    name: "Hin Pee Wee",
    rating: 3,
    image: "https://www.divepoint-kohtao.com/images/tauchplaetze/Hin-Pee-Wee.jpg",
    maxDepth: 25,
    marineLife: ["Scribbled File Fish", "Cuttle Fish", "Reef Octopus"],
    highlights: ["??"],
    id: 7
}, {
    name: "Shark Island",
    rating: 7,
    image: "https://www.divepoint-kohtao.com/images/tauchplaetze/Shark-Island.jpg",
    maxDepth: 26,
    marineLife: ["Black Tip Reef Sharks", "Barracuda"],
    highlights: ["Strong Currents", "Coral Walls"],
    id: 8
}, {
    name: "SouthWest Pinnacle",
    rating: 9,
    image: "https://www.divepoint-kohtao.com/images/tauchplaetze/Southwest-Pinnacle.jpg",
    maxDepth: 35,
    marineLife: ["WhaleShark", "Bull Shark", "Turtles"],
    highlights: ["Everything"],
    id: 9
}, {
    name: "Chumphon Pinnacle",
    rating: 9,
    image: "https://www.divepoint-kohtao.com/images/tauchplaetze/Chumpon-Pinnacle.jpg",
    maxDepth: 35,
    marineLife: ["WhaleShark", "Turtles", "Giant Barracuda", "Cobia", "Sail Fish", "Bat Fish"],
    highlights: ["Everything"],
    id: 10
}, {
    name: "Sail Rock",
    rating: 10,
    image: "https://www.divepoint-kohtao.com/images/tauchplaetze/Sail-Rock.jpg",
    maxDepth: 30,
    marineLife: ["Everything"],
    highlights: ["Everything"],
    id: 11
}, {
    name: "No Name Pinnacle",
    rating: 3,
    image: "https://www.divepoint-kohtao.com/images/tauchplaetze/No-Name.jpg",
    maxDepth: 28,
    marineLife: ["Various"],
    highlights: ["Various"],
    id: 12
}, {
    name: "Lighthouse",
    rating: 4,
    image: "https://www.divepoint-kohtao.com/images/tauchplaetze/Lighthouse.jpg",
    maxDepth: 18,
    marineLife: ["Unicorn Fish"],
    highlights: ["Staghorn Gardens"],
    id: 13
}];

const parentContainer = document.querySelector("#maps-main-container");

mapData.forEach(
    i => {
        
        const outerContainer = document.createElement("DIV");
        parentContainer.appendChild(outerContainer).setAttribute("class", "outer-container");
        outerContainer.appendChild(document.createElement("DIV")).setAttribute("id", `maps-main-info${i.id}`);
        const thisContainer = document.querySelector(`#maps-main-info${i.id}`);
        thisContainer.setAttribute("id", `nav-link${mapData.indexOf(i)}`);
        thisContainer.setAttribute("class", "map-info");
        thisContainer.appendChild(document.createElement("H3")).innerText = `${i.name}`;
        thisContainer.appendChild(document.createElement("P")).innerText = `Max Depth: ${i.maxDepth}m`;
        thisContainer.appendChild(document.createElement("P")).innerText = `Rating: ${i.rating}/ 10`;
        thisContainer.appendChild(document.createElement("H4")).innerText ="Cool Fish Here!";
        thisContainer.appendChild(document.createElement("UL"));
        i.marineLife.forEach(
            i => {
                thisContainer.appendChild(document.createElement("LI")).innerText = i;
            }
        )
        thisContainer.appendChild(document.createElement("H4")).innerText ="Cool Stuff to See!";
        thisContainer.appendChild(document.createElement("UL"));
        i.highlights.forEach(
            i => {
                thisContainer.appendChild(document.createElement("LI")).innerText = i;
            }
        )
        const mapContainer = outerContainer.appendChild(document.createElement("DIV"))
        mapContainer.setAttribute("id", `maps-main-map${i.id}`);
        mapContainer.setAttribute("class", "map-map");
        const mapImage = document.querySelector(`#maps-main-map${i.id}`).appendChild(document.createElement("IMG"))
        mapImage.setAttribute("src", i.image)
        mapImage.setAttribute("class", "mapImage");
        // mapImage.setAttribute("id", `#nav-link${mapData.indexOf(i)}`);
    }
);

    const mapNames = mapData.map(e => e.name);
    
    const navContainer = parentContainer.appendChild(document.createElement("NAV"));
    navContainer.setAttribute("class", "map-nav")
        mapNames.forEach(
            i=> {
                const navItem = navContainer.appendChild(document.createElement("A"));
                navItem.innerText = i;
                navItem.setAttribute("href", `#nav-link${mapNames.indexOf(i)}`);
            }
        )
