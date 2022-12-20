// ########## Hamburger-Icon ##########

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".mobile nav");

hamburger?.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

// ########## Back-To-Top ##########

const toTop = document.querySelector(".fa-arrow-up");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 200){
        toTop?.classList?.add("active");
    }else{
        toTop?.classList?.remove("active");
    }
})