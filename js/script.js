// import initAccordion from "./modules/accordion.js";
// initAccordion();

const accordionList = document.querySelectorAll(".js-accordion h3");
const descriptions = document.querySelectorAll(
  ".js-accordion .weapon-attribute div:nth-child(2)"
);
const arrayAccordionList = Array.from(accordionList);
const arrayDescriptions = Array.from(descriptions);

const itemIndex = arrayAccordionList.map((item, index) => {
  return index; // Aqui estava tentando vincular os index de cada array.
});
const descIndex = arrayDescriptions.map((item, index) => {
  return index; // Aqui estava tentando vincular os index de cada array.
});

function activeAccordion() {
  console.log(this.nextElementSibling.nextElementSibling.nextElementSibling);
  // Aqui tentei remover so 2 <p> para ver se
  // Sumia o Null mas não deu certo
}

arrayAccordionList.map((item) => {
  item.addEventListener("click", activeAccordion);
});
