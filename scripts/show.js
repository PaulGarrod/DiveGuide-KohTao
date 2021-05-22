const index = mapNames.indexOf(e.target.innerHTML);

let rating = document.createElement("P");
rating.innerHTML = `Overall Rating: ${mapData[index].rating}/ 10`;
showLeft.prepend(newRating);

let depth = document.createElement("P");
depth.innerHTML = `Maximum Depth: ${mapData[index].maxDepth} meters`;
showLeft.prepend(depth);

let siteName = document.createElement("H3");
siteName.innerHTML = `Site Name: ${mapData[index].name}`;
showLeft.prepend(siteName);

mapData[index].marineLife.forEach(
    i => {
        let fish = document.createElement("LI");
        fish.innerHTML = i;
        showMarineLifeList.appendChild(fish);
    }
)

mapData[index].highlights.forEach(
    i => {
        let highlight = document.createElement("LI");
        highlight.innerHTML = i;
        showAskTheInstructorList.appendChild(highlight);
    }
)

let mapImage = document.createElement("IMG");
mapImage.src = mapData[index].image;
mapImage.classList = "mapImage";
showRight.append(mapImage);