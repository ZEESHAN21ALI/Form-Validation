let box = document.getElementById("box");
let boxModel = document.getElementById("box-model");
let user = {}
function signup(event) {
    event.preventDefault();
    box.style.display = "flex";
    box.className = "animate__animated animate__fadeIn"
    boxModel.className = "animate__animated animate__zoomIn"
    let form = document.forms.register;
    user.name = form.elements.name.value;
    user.number = form.elements.number.value;
    user.email = form.elements.email.value;
    user.password = form.elements.password.value;
}
console.log(user);

function signin(){    
    // box.style.display = "none";
    box.className = "animate__animated animate__fadeOut"
    boxModel.className = "animate__animated animate__zoomOut"
}