/**
 * Project's page functionallity
 */

document.querySelectorAll(".description-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log("clicked");
    btn.classList.toggle("change");
    btn.nextElementSibling.classList.toggle("change");
  });
});
