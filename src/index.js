console.log("Hello World");

import WishList from "./wishlist";

const submitForm = document.querySelector("#submitForm");
const makeInput = document.querySelector("#makeInput");
const modelInput = document.querySelector("#modelInput");
const yearInput = document.querySelector("#yearInput");
const carMake = document.querySelector("#car-make");
const carModel = document.querySelector("#car-model");
const carYear = document.querySelector("#car-year");
const removeBtn = document.querySelector(".removeBtn");
const wishlistUl = document.querySelector("#wishListContainer > ul");

const wishlist = new WishList();
submitForm.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);

function showCarDetails(car) {
    carMake.textContent = `Make: ${car.make}`;
    carModel.textContent = `Model: ${car.model}`;
    carYear.textContent = `Year: ${car.year}`;
    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carID", car.id);
}

function updateDOMList () {
    //clear our the contents of the unordered list
    wishlistUl.innerHTML = ""; 

    wishlist.list.forEach((dreamCar) => {
        const newLi = document.createElement("li");
        newLi.textContent = `${dreamCar.make}, ${dreamCar.model}`
        newLi.addEventListener("click", () => {
            showCarDetails(dreamCar);
        });
        wishlistUl.append(newLi);
    });
}

//this function is an event handler
function addCar(submitEvent) {
    submitEvent.preventDefault();
    console.log(makeInput, modelInput, yearInput);
    wishlist.add(makeInput.value, modelInput.value, yearInput.value);
    updateDOMList();
}

function removeCar(){
    const carId = Number(removeBtn.getAttribute("data-carId"));
    wishlist.remove(carId);
    //updating the display after changing the state
    updateDOMList();
    carMake.textContent = "";
    carModel.textContent = "";
    carYear.textContent = "";
    removeBtn.disabled = true;
}


removeBtn.addEventListener("click", removeCar);
