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
