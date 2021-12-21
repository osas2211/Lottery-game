const ham = document.querySelector(".ham");
const Close = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile-nav");

const nav = () =>{
    if (mobileNav.classList.contains("hide-nav")){
        mobileNav.classList.remove("hide-nav");
        mobileNav.classList.add("show-nav");
        ham.classList.remove("show");
        Close.classList.add("show");
    }

    else if (mobileNav.classList.contains("show-nav")){
        mobileNav.classList.remove("show-nav");
        mobileNav.classList.add("hide-nav");
        ham.classList.add("show");
        Close.classList.remove("show");
    }
}

ham.addEventListener("click", nav);
Close.addEventListener("click", nav);