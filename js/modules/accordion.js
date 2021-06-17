export default function initAccordion() {}
const accordionList = document.querySelectorAll(".js-accordion h3");
const descriptions = document.querySelectorAll(
  ".js-accordion .weapon-attribute div:nth-child(2)"
);
const arrayAccordionList = Array.from(accordionList);
const arrayDescriptions = Array.from(descriptions);

function activeAccordion(arrayAccordionList, arrayDescriptions) {
  if (arrayAccordionList.length != arrayDescriptions.length) {
    return false;
  }
  return arrayDescriptions.every(
    (value, index) => value === arrayAccordionList[index]
  );
}

arrayAccordionList.map((item, index) => {
  item.addEventListener("click", activeAccordion);
});
