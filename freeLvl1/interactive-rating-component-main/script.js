const submitBtn = document.querySelector(".btn-submit");
const containerOptions = document.querySelector(".container-main-options");
const optionList = document.querySelectorAll(".options");


function mouseOver() {
    containerOptions.style.backgrounColor = "black";
};

optionList.addEventListener('mouseover', () => {
    containerOptions.style.backgrounColor = "black";
    containerOptions.style.cursor = pointer;

});