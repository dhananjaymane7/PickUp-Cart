let mailForm = document.querySelector(".yourEmail");
let rateCalculator = document.querySelector(".rateCalculator");
mailForm.addEventListener("click", makeVisible2);
function makeVisible2() {
    // hiddenSection.classList.add("active")
    rateCalculator.classList.toggle("active");
}