const submitBtn = document.querySelector(".btn-submit");
const containerOptions = document.querySelector(".container-main-op");
const optionList = document.querySelectorAll(".options");
const containerMainOne = document.querySelector(".container-main-main");
const containerMainSec = document.querySelector(".container-2o-main-main");
const containerMainSecSelected = document.querySelectorAll(".options");
const containerSecondText = document.querySelector(".container-2o-main-main-choose-text");

let firstValue = 0;
function addAndRemoveSelected(event) {
    if(event.target.classList.contains("options")){
        const selectedOption = document.querySelector(".selected");
        if(selectedOption){
            selectedOption.classList.remove('selected');
        }
        event.target.classList.toggle('selected');
        firstValue = event.target.innerText;
        }
};

function submitNote() {
    containerMainOne.style.display = "none";
    containerMainSec.style.display = "flex";
    containerSecondText.innerText = "You have selected: " + firstValue + " out of 5";
};

containerOptions.addEventListener('click', (event) => {
    if (event.target.classList.contains("options")){
    submitBtn.toggleAttribute('disabled');
    submitBtn.classList.remove('disabled');
    };
});

containerOptions.addEventListener('click', addAndRemoveSelected);
submitBtn.addEventListener('click', submitNote);