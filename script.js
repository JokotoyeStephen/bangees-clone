const menuIcon = document.getElementById('our');
const navlinks = document.getElementById('menuicon');

menuIcon.addEventListener('click', () => {
    navlinks.classList.toggle('active');
});

function togglemenu(id) {
    const element = document.getElementById(id);
    element.classList.toggle('show');
}
function stephen(id) {
    const element = document.getElementById(id);
    element.classList.toggle('show');
}
// document.querySelector("#logo");
// let loGo = document.querySelector("#logo");
// console.log(loGo);

// loGo.setAttribute("src", "/image/Frame-86-980x518.png")
