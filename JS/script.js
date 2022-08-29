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

const FoodMenuList = [
  { name: "Guláš", weight: 220, price: 150 },
  { name: "Lasagne", weight: 180, price: 100 },
  { name: "Kebab", weight: 240, price: 130 },
  { name: "Palačinky", weight: 80, price: 90 },
  { name: "Svíčková", weight: 250, price: 130 },
];
let options = [];
function getImage(img) {
  const howManySections = document.querySelectorAll("section");
  const i = howManySections.length;
  img.src = `./imgs/img${i}.jpg`;
}
function getText(h3) {
  const howManyH3 = document.querySelectorAll("h3");
  const i = howManyH3.length;
  h3.textContent = FoodMenuList[i - 1].name;
}
function getWeight(p) {
  const howManySections = document.querySelectorAll("section");
  const i = howManySections.length;
  p.textContent = `${FoodMenuList[i - 1].weight} g`;
}
function getPrice(p) {
  const howManySections = document.querySelectorAll("section");
  const i = howManySections.length;
  p.textContent = `${FoodMenuList[i - 1].price} Kč`;
}

function allSectionsAtributes() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    section.classList.add("food-card");
    section.setAttribute("id", index + 1);

    const firstDiv = section.querySelector("div");
    firstDiv.classList.add("food-info");
    const insideSecondDiv = firstDiv.querySelector("div");
    insideSecondDiv.classList.add("food-value");

    const allP = insideSecondDiv.querySelectorAll("p");
    allP[1].classList.add("cena");

    const secondDiv = section.querySelectorAll("div");
    secondDiv[2].classList.add("img-food");

    const input = section.querySelector("input");
    input.classList.add("input-add");
    input.setAttribute("type", "submit");
    input.value = "Přidat";

    const select = document.querySelectorAll("select");

    select.forEach((select, i) => {
      select.setAttribute("id", `select-${i + 1} `);
    });
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

  const formAddingFood = document.createElement("div");
  div2.appendChild(formAddingFood);

  const input = document.createElement("input");

  const selectContainer = document.createElement("div");
  const select = document.createElement("select");

  let options = [];
  for (i = 0; i < FoodMenuList.length; i++) {
    const option = document.createElement("option");
    options.push(option);
    option.innerText = i + 1;
  }

  formAddingFood.appendChild(selectContainer);
  selectContainer.appendChild(select);

  options.forEach((option) => {
    select.appendChild(option);
  });

  select.addEventListener("change", (e) => {
    let targetedValue = e.target.value;
    removeEventListener("change", select);
    const target = e.target;
    const parent = target.parentNode.parentNode.parentNode.parentNode;
    const nameh3 = parent.querySelector("h3");
    const texth3 = nameh3.textContent;

    const cenaTarget = parent.querySelectorAll("p");

    const cena = cenaTarget[1].textContent;

    input.addEventListener("click", () => {
      removeEventListener("click", input);
      const asideP = document.querySelector(".aside-p");

      const newP = document.createElement("p");
      asideP.parentNode.prepend(newP);

      newP.innerHTML = `Objednal jsem si: <strong> ${texth3} </strong> <br> Porce: ${targetedValue}, <br> Cena: ${cena} *  ${targetedValue}`;
    });
  });

  const imgFood = document.createElement("img");
  formAddingFood.appendChild(input);
  div2.appendChild(imgFood);

  allSectionsAtributes();
  getImage(imgFood);
  getText(foodName);
  getWeight(foodValueWeight);
  getPrice(foodValuePrice);
}

function addSection(element) {
  createNewSection(element);
}

for (let i = 0; i < FoodMenuList.length; i++) {
  addSection("section");
}

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", (e) => {
  const siblings = clearBtn.previousElementSibling;

  if (siblings == null) {
    return;
  } else {
    siblings.remove();
  }
});

const clearBtnAll = document.querySelector(".clear-btn-all");
clearBtnAll.addEventListener("click", (e) => {
  const allP = clearBtn.parentNode.querySelectorAll("p");
  const p = document.querySelector(".aside-p");

  if (p === undefined) {
    const newPp = document.createElement("p");
    const asideMenu = document.querySelector(".aside-menu");
    asideMenu.appendChild(newPp);

    return;
  } else {
    allP.forEach((parent) => {
      parent.remove();
    });
  }
});
