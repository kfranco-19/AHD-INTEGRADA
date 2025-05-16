const hambureguesa = document.querySelector(".hamburguesa");
const navMenu = document.querySelector("nav ul");

hambureguesa.addEventListener("click", () =>{
    navMenu.classList.toggle("verMenu");
})