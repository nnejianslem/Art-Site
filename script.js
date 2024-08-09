window.onload = () =>{
    setTimeout(() =>{
        document.querySelector("body").classList.add("display")
    }, 4000);
};

document.querySelector(".architect-menu").addEventListener("click", ()=>{
    document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () =>{
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() =>{
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000)
})

const scrollButton = document.querySelector(".scroll-btn")
window.addEventListener("scroll", () =>{
    if(window.scrollY > 0) {
        scrollButton.classList.add("sticky")
    }else{
        scrollButton.classList.remove("sticky")
    }
})