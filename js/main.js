const navbar_toggler = document.querySelector(".navbar-toggler");
const navbar_nav = document.getElementById("navbar-nav");
const profileIconContainer1 = document.getElementById("profile-icon-container1");
const profileIconContainer2 = document.getElementById("profile-icon-container2");

navbar_toggler.addEventListener("click", () => {
    navbar_nav.classList.toggle("d-none");

});

function handleWindowSize() {
    if (window.innerWidth > 992) {
        navbar_toggler.hidden = true;
        navbar_nav.classList.remove("navbar-collapse", "d-none");
        profileIconContainer1.classList.add("d-none");
        profileIconContainer2.classList.remove("d-none");
    } else if (window.innerWidth <= 992 && window.innerWidth > 576) {
        navbar_toggler.hidden = false;
        navbar_nav.classList.add("navbar-collapse", "d-none");
        profileIconContainer1.classList.remove("d-none");
        profileIconContainer2.classList.add("d-none");
    } else {
        navbar_toggler.hidden = false;
        navbar_nav.classList.add("navbar-collapse", "d-none");
        profileIconContainer1.classList.add("d-none");
        profileIconContainer2.classList.remove("d-none");
    }
}

handleWindowSize();

window.addEventListener("resize", handleWindowSize);

document.getElementById("year").innerHTML = new Date().getFullYear();