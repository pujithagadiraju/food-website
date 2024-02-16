function myFunc() {
    let searchVal = document.getElementById("inp").value.toUpperCase();
    let table = document.getElementsByTagName("table")
    let tr = document.getElementsByTagName("tr")

    let front = document.querySelector(".main")

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            let text = td.innerText;
            if (text.toLocaleUpperCase().indexOf(searchVal) > -1) {
                tr[i].style.display = "";
                front.style.display = "none";
            }
            else {
                tr[i].style.display = "none";
            }
        }

    }
    if (searchVal == "") {
        front.style.display = "flex";
    }
    console.log(searchVal);
}

//alert msg when order button is clicked
let btn = document.body;
btn.addEventListener("click", e => {
    if (e.target.classList.contains("mybtn"))
        alert("order placed");
});






function nav() {
    let nav = document.querySelector(".nav");
    nav.style.display = "block";

    let login = document.querySelector(".login");
    login.style.display = "none";

    let cart = document.querySelector(".cart");
    cart.style.display = "none";

}
function Login() {
    let login = document.querySelector(".login");
    login.style.display = "block";

    let nav = document.querySelector(".nav");
    nav.style.display = "none";

    let cart = document.querySelector(".cart");
    cart.style.display = "none";

}
function cart() {
    let cart = document.querySelector(".cart");
    cart.style.display = "block";

    let nav = document.querySelector(".nav");
    nav.style.display = "none";

    let login = document.querySelector(".login");
    login.style.display = "none";
}

//slidebar in review

let slide = document.querySelectorAll(".customer");
let count = 0;
console.log(slide);

slide.forEach(function (customer, index) {
    customer.style.left = `${index * 100}%`
})

function next() {
    count++;
    if (count == slide.length) {
        count = 0;
    }
    bar()
}
function pre() {
    count--;
    if (count == -1) {
        count = slide.length - 1
    }
    bar()
}
function bar() {
    slide.forEach(function (customer) {
        customer.style.transform = `translateX(-${count * 100}%)`
    })
}