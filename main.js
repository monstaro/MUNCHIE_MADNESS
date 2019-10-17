//Iteration 1
// When the user hits `Add Snack`, a card is created that has the munchie name and the description.


var addSnack = document.querySelector('.addSnackBtn');
var groceryList = document.querySelector('.grocery-list');

addSnack.addEventListener('click', checkEmptyFields);
groceryList.addEventListener('click', deleteCard)

function checkEmptyFields() {
    var snackItem = document.querySelector(".snack-item");
    var snackInfo = document.querySelector(".snack-info");
    event.preventDefault();
    var error = document.querySelector(".error")
    var error2 = document.querySelector(".error2")
    var noError = true;
    if (snackItem.value === "") {
        error.style.display = "inline";
        noError = false;
    }
    if (snackItem.value != "") {
        error.style.display = "none";
    }
    if (snackInfo.value === "") {
        error2.style.display = "inline";
        noError = false;
    }
    if (snackInfo.value != "") {
        error2.style.display = "none";
    }
    if (noError) {
        addNewSnack();
    }
}


function addNewSnack(event) {
    var snackItem = document.querySelector(".snack-item").value;
    var snackInfo = document.querySelector(".snack-info").value;
    var groceryList = document.querySelector(".grocery-list");
    // var newCard = document.createElement('new-card');
    // var dynItem = document.createTextNode(`${snackItem}`);
    // var dynInfo = document.createTextNode(`${snackInfo}`);
    // newCard.appendChild(dynItem);
    // newCard.appendChild(dynInfo);
    // var currentDiv = document.getElementById(".new-cards");
    // document.body.insertBefore(newCard, currentDiv);
    groceryList.innerHTML += `<section class="new-card">
        <input type="text" class="snackEdit" value=${snackItem}></input> <br>
        <input type="text" class="snackEdit" value=${snackInfo}></input>
        <button class="delete">DELETE</button>
        </section>`
}


function deleteCard(event) {
    if (event.target.classList.contains('delete')) {
        event.target.parentNode.remove();
    }
    if (event.target.classList.contains('new-card')) {
        event.target.style.background = "#" + ((1 << 24) * Math.random() | 0).toString(16)
    }
}




//Iteration 2
// Edit the HTML of the dynamic snack cards to include a DELETE button. When the user clicks the DELETE button, that specific CARD is removed from the DOM


//Iteration 3
//User can edit the name of the snack OR its description by clicking on the particular field on the CARD!


//Iteration 4
// If there is no text in the item field OR the info field, the Add Snack button should be disabled


//Iteration 5
// When a user clicks the card, it will randomly select a new background color for the card