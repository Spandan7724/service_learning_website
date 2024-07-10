var modal = document.getElementById("loginModal");
var btn = document.getElementById("loginBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}


var registerModal = document.getElementById("registerModal");
var registerLink = document.getElementById("registerLink");
var closeRegister = document.getElementsByClassName("close-register")[0];

registerLink.onclick = function () {
    modal.style.display = "none"; 
    registerModal.style.display = "block"; 
}

closeRegister.onclick = function () {
    registerModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}

// sidebar in phone
function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var sidenav = document.getElementById("mySidenav");
    menuIcon.classList.toggle("change");
    if (sidenav.style.width === "250px") {
        sidenav.style.width = "0";
    } else {
        sidenav.style.width = "250px";
    }
}

function closeNav() {
    var menuIcon = document.querySelector('.menu-icon');
    var sidenav = document.getElementById("mySidenav");
    menuIcon.classList.remove("change");
    sidenav.style.width = "0";
}
