//Data sourse
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
    {
        name: "Chili",
        type: "Food",
        color: "Red",
        image: "https://res.cloudinary.com/drvfsh5ig/image/upload/v1649909286/Materials%20in%20my%20city/IMG_8194_uyqdd4.jpg",
    },
    {
        name: "Cracked Mud Wall",
        type: "BuildingMaterials",
        color: "Khaki",
        image: "https://res.cloudinary.com/drvfsh5ig/image/upload/v1649909282/Materials%20in%20my%20city/IMG_8097_pw1vro.jpg",
    },
    {
        name: "Two-color Brick Wall",
        type: "BuildingMaterials",
        color: "Grey",
        image: "https://res.cloudinary.com/drvfsh5ig/image/upload/v1649909280/Materials%20in%20my%20city/IMG_8096_st8ace.jpg",
    },
    {
        name: "Brick Wall",
        type: "BuildingMaterials",
        color: "Grey",
        image: "https://res.cloudinary.com/drvfsh5ig/image/upload/v1649909275/Materials%20in%20my%20city/IMG_8091_swtgu4.jpg",
    },
    {
        name: "Plank",
        type: "BuildingMaterials",
        color: "Grey",
        image: "https://res.cloudinary.com/drvfsh5ig/image/upload/v1649909268/Materials%20in%20my%20city/IMG_8095_yal9vz.jpg",
    },
    {
        name: "Wooden Door",
        type: "BuildingMaterials",
        color: "Red",
        image: "https://res.cloudinary.com/drvfsh5ig/image/upload/v1649909266/Materials%20in%20my%20city/IMG_8094_quwkfq.jpg",
    },
    {
        name: "Mud Wall",
        type: "BuildingMaterials",
        color: "Khaki",
        image: "https://res.cloudinary.com/drvfsh5ig/image/upload/v1649909265/Materials%20in%20my%20city/IMG_8085_rekady.jpg",
    },
    {
        name: "Red Plank",
        type: "BuildingMaterials",
        color: "Red",
        image: "https://res.cloudinary.com/drvfsh5ig/image/upload/v1649909259/Materials%20in%20my%20city/IMG_8105_ay3mo7.jpg",
    },
    {
        name: "Iron Gate",
        type: "BuildingMaterials",
        color: "Red",
        image: "https://res.cloudinary.com/drvfsh5ig/image/upload/v1649909251/Materials%20in%20my%20city/IMG_4792_m7ow2h.jpg",
    },
];


//Add collapsable sorting menu

var collBtn = document.getElementsByClassName("collapsible");

for (var i = 0; i < collBtn.length; i++) {
  function expand(){
    this.classList.toggle("active");
    let collContent = this.nextElementSibling;
    if (collContent.style.display === "block"){
      collContent.style.display = "none";
    } else {
      collContent.style.display = "block";
    }
  }
  
  collBtn[i].addEventListener("click", expand);
  
}


//Render materials to the page
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


//filter by type and color

let filterBtns = document.querySelectorAll(".filterContainer");
let cards = document.querySelectorAll(".card");

function filterFn(event) {
    if (event.target.classList.contains("filter-btn")){
        filterBtns.querySelector(".active").classList.remove("active");

        event.target.classList.add("active");

        const filterValue = event.target.getAttributes("data-filter");

        for (let i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains(filterValue) || filterValue === "all"){
                cards[i].classList.remove("hide");
                cards[i].classList.add("show");
            } else {
                cards[i].classList.remove("show");
                cards[i].classList.add("hide");
            }
        }
    }
}

filterBtns.addEventListener("click", filterFn);