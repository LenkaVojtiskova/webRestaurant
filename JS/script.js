const MAX_NUMBER_OF_ITEMS = 5;
const FoodMenuList = [
  { name: "Guláš", weight: 220, price: 150 },
  { name: "Lasagne", weight: 180, price: 100 },
  { name: "Kebab", weight: 240, price: 130 },
  { name: "Palačinky", weight: 80, price: 90 },
  { name: "Svíčková", weight: 250, price: 130 },
];

function addNavbarListeners() {
  const toggleElement = document.querySelector(".menuLi");
  const src = document.querySelector(".menu");
  const imgOff = document.querySelector(".off-dropdown-menu-icon");
  const imgOn = document.createElement("img");

  imgOn.src = "./imgs/down-on.png";
  imgOn.style.display = "none";
  src.appendChild(imgOn);

  function hideOriginalImg() {
    imgOn.style.display = "none";
    imgOff.style.display = "flex";
    toggleElement.removeEventListener("mouseleave", hideOriginalImg);
  }

  toggleElement.addEventListener("mouseenter", () => {
    imgOff.style.display = "none";
    imgOn.style.display = "flex";

    toggleElement.addEventListener("mouseleave", hideOriginalImg);
  });
}

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

function addSelectAttributes() {
  const select = document.querySelectorAll("select");
  select.forEach((select, i) => {
    select.setAttribute("id", `select-${i + 1} `);
  });
}

function addSectionAtributes(section) {
  const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    section.classList.add("food-card");
    section.setAttribute("id", `section${index + 1}`);

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
  });
}

function createNewSection(element, item, index) {
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

  for (i = 0; i < MAX_NUMBER_OF_ITEMS; i++) {
    const option = document.createElement("option");
    option.innerText = i + 1;
    select.appendChild(option);
  }

  formAddingFood.appendChild(selectContainer);
  selectContainer.appendChild(select);

  const asideP = document.querySelector(".aside-p");
  input.addEventListener("click", () => {
    const parent = document.querySelector(`#section${index + 1}`);
    const nameh3 = parent.querySelector("h3");
    const texth3 = nameh3.textContent;

    const cenaTarget = parent.querySelectorAll("p");

    const cena = cenaTarget[1].textContent;

    const newP = document.createElement("p");
    asideP.parentNode.prepend(newP);
    newP.innerHTML = `Objednal jsem si: <strong> ${texth3} </strong> <br> Porce: ${select.value}, <br> Cena: ${cena} *  ${select.value}`;
  });

  const imgFood = document.createElement("img");
  imgFood.classList.add("imgOfFood");
  formAddingFood.appendChild(input);
  div2.appendChild(imgFood);

  addSectionAtributes();
  getImage(imgFood);
  getText(foodName);
  getWeight(foodValueWeight);
  getPrice(foodValuePrice);
}

function addClearButtonListener() {
  const clearBtn = document.querySelector(".clear-btn");
  clearBtn.addEventListener("click", (e) => {
    const sibling = clearBtn.previousElementSibling;

    if (sibling == null) {
      return;
    } else {
      sibling.remove();
    }
  });
}

function addClearAllButtonListener() {
  const clearBtnAll = document.querySelector(".clear-btn-all");
  const clearBtn = document.querySelector(".clear-btn");

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
}

function main() {
  addNavbarListeners();

  for (let i = 0; i < FoodMenuList.length; i++) {
    createNewSection("section", FoodMenuList[i], i);
  }

  addClearButtonListener();
  addClearAllButtonListener();
}

main();
