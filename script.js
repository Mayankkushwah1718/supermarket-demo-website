// ============================
// MOBILE MENU
// ============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close menu after clicking a link

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// ============================
// ADD TO CART
// ============================

function addToCart(productName) {

    alert(productName + " has been added to your cart!");

}


// ============================
// BASIC EMAIL VALIDATION
// ============================

function validateEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}


// ============================
// LOGIN VALIDATION
// ============================

function validateLogin(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value.trim();


    if (email === "") {

        alert("Please enter your email.");

        return false;
    }


    if (!validateEmail(email)) {

        alert("Please enter a valid email address.");

        return false;
    }


    if (password === "") {

        alert("Please enter your password.");

        return false;
    }


    if (password.length < 6) {

        alert(
            "Password must contain at least 6 characters."
        );

        return false;
    }


    alert("Login details are valid!");

    return true;
}