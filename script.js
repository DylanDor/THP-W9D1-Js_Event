// FONCTION 1

let ftr = document.querySelector("footer");
let count = 0;
ftr.addEventListener("click", function () {
    count++
    console.log("clique numéro " + count);
});

// FONCTION 2

let menu = document.querySelector("#navbarHeader");
let burgerMenu = document.querySelector(".navbar-toggler")
burgerMenu.addEventListener("click", function () {
    menu.classList.toggle("collapse");
});

//FONCTION 3
let card1 = document.querySelector(".card");
let editBtn = document.querySelector(".card .btn-outline-secondary");
editBtn.addEventListener("click", function () {
    card1.style.color = "red";
});

//FONCTION 4
let card2 = document.querySelectorAll(".card")[1];
let editBtn2 = document.querySelectorAll(".card .btn-outline-secondary")[1];
editBtn2.addEventListener("click", function () {
    if (card2.style.color === 'green') {
        card2.style.color = '';
    } else {
        card2.style.color = 'green';
    }
});

//FONCTION 5

let nav = document.querySelector(".navbar");
nav.addEventListener("dblclick", function () {
    if (document.querySelector('link').disabled === true) {
        document.querySelector('link').disabled = false;
    }
    else {
        document.querySelector('link').disabled = true;
    }
});

// FONCTION 6

let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    let status = false;
    let btnView = card.querySelector(".btn-success");
    let img = card.querySelector(".card-img-top");
    btnView.addEventListener("mouseenter", function () {
        card.querySelector("p.card-text").toggleAttribute("hidden");
        if (status === false) {
            img.setAttribute("style", "width:20%");
            status = true;
        }
        else if (status === true) {
            img.setAttribute("style", "width:100%");
            status = false;
        }
    });
});

// FONCTION 7

let btnRowRight = document.querySelector(".jumbotron .btn-secondary");

btnRowRight.addEventListener("click", function () {
    document.querySelector(".album .row").prepend(document.querySelectorAll(".col-md-4")[5]);
    //document.querySelector(".album .row").insertBefore(document.querySelectorAll(".col-md-4")[5], document.querySelectorAll(".col-md-4")[0])
});

// FONCTION 8

let btnRowLeft = document.querySelector(".jumbotron .btn-primary");

btnRowLeft.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".album .row").append(document.querySelectorAll(".col-md-4")[0]);
})

// FONCTION 9

let logo = document.querySelector(".navbar-brand");
let body = document.querySelector("body");

logo.addEventListener("click", function () {
    document.addEventListener("keydown", function (input) {
        switch (input.key) {
            case 'a':
                document.body.classList = 'col-4';
                break;
            case 'y':
                document.body.classList = 'col-4 offset-4';
                break;
            case 'p':
                document.body.classList = 'col-4 offset-8';
                break;
            case 'b':
                document.body.classList = '';
                break;
        }
    });
});




