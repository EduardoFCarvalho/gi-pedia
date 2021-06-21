export default function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion h3");
  const arrayAccordionList = Array.from(accordionList);
  let i;

  function activeAccordion() {
    this.classList.toggle("ativo");
    this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle(
      "ativo"
    );
  }

  for (i = 0; i < arrayAccordionList.length; i++) {
    arrayAccordionList[i].addEventListener("click", activeAccordion);
  }
}
