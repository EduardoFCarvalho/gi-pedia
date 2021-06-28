export default function initDropdownMenu() {}

const dropdownMenus = document.querySelectorAll("[data-dropdown]");

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle("active");
}

dropdownMenus.forEach((menu) => {
  ["touchstart"].forEach((mobileEvent) => {
    menu.addEventListener(mobileEvent, handleClick);
  });
});
