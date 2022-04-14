const materials = [
    {
        name:"Moss",
        type: "Foliage",
        color: "Green",
        image: "https://res.cloudinary.com/drvfsh5ig/image/upload/v1649909253/Materials%20in%20my%20city/IMG_4750_ch0xn8.jpg",
    },
    {
        name: "Mint",
        type: "Foliage",
        color: "Green",
        image: "https://res.cloudinary.com/drvfsh5ig/image/upload/v1649909279/Materials%20in%20my%20city/IMG_8197_yb0zy2.jpg",
    },
];


const cardContainer = document.querySelector(".cardContainer");

function renderMaterialToPage(materials) {
    for (let i = 0; i < materials.length; i++){
        let card = document.createElement("li");
        card.classList.add(materials[i].color, materials[i].type, "card");

        let description = document.createElement("div");
        description.classList.add(materials[i].color,"description");

        let title = document.createElement("h3");
        title.classList.add("title");
        title.textContent = materials[i].name;

        let type = document.createElement("p");
        type.classList.add(materials[i].type);
        type.textContent = materials[i].type;

        let image = document.createElement("img");
        image.setAttribute("src", materials[i].image);

        cardContainer.appendChild(card);
        card.appendChild(description);
        description.appendChild(title);
        description.appendChild(type);
        card.appendChild(image);
    }
}

renderMaterialToPage(materials);