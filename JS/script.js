const toggleElement = document.querySelector(".menuLi");
const src = document.querySelector(".menu");
const imgOff = document.querySelector(".off-dropdown-menu-icon");
const about = document.querySelector("#about");

const imgOn = document.createElement("img");
imgOn.src = "./imgs/down-on.png";

toggleElement.addEventListener("mouseover", () => {
  imgOff.style.display = "none";
  imgOn.style.display = "flex";
  src.appendChild(imgOn);

  about.addEventListener("mouseover", (e) => {
    imgOn.style.display = "none";
    imgOff.style.display = "flex";
  });
});

function getImage(img) {
  const howManySections = document.querySelectorAll("section");
  const i = howManySections.length;
  img.src = `./imgs/img${i}.jpg`;
}

function allSectionsAtributes() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    section.classList.add("food-card");
    const firstDiv = section.querySelector("div");
    firstDiv.classList.add("food-info");
    const insideSecondDiv = firstDiv.querySelector("div");
    insideSecondDiv.classList.add("food-value");

    const allP = insideSecondDiv.querySelectorAll("p");
    allP[1].classList.add("cena");

    section.setAttribute("id", index + 1);
    const secondDiv = section.querySelectorAll("div");

    secondDiv[2].classList.add("img-food");
  });
}

function createNewSection(element) {
  const srcContainer = document.querySelector(".main-left");
  const newSection = document.createElement(element);

  srcContainer.appendChild(newSection);

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  newSection.appendChild(div1);
  newSection.appendChild(div2);
  const foodName = document.createElement("h3");

  const foodValue = document.createElement("div");
  div1.appendChild(foodName);
  div1.appendChild(foodValue);

  const foodValueWeight = document.createElement("p");
  const foodValuePrice = document.createElement("p");
  foodValue.appendChild(foodValueWeight);
  foodValue.appendChild(foodValuePrice);

  const imgFood = document.createElement("img");

  div2.appendChild(imgFood);

  allSectionsAtributes();
  getImage(imgFood);
}

function addSection(element) {
  createNewSection(element);
}

addSection("section");
addSection("section");
addSection("section");
