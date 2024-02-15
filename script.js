var t1 = gsap.timeline();
function loading(){
    t1.to("#yellow1", {
        top: "-100%",
        duration: 0.5,
        delay: 0.5,
        ease: "expo.out"
    })
    
    t1.to("#loader h1", {
        color: "black",
        delay: 0.3,
        duration: 0.3,
    }, "anim")

    t1.to("#loader", {
        opacity: 0
    })

    t1.to("#loader", {
        display: "none"
    })
    
    t1.from("#yellow2", {
        top: "100%",
        delay: 0.5,
        duration: 0.5,
        ease: "expo.out"
    }, "anim")
    
}
loading();

function locoScroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    
    document.querySelector("#footer h2").addEventListener("click", function(){
        scroll.scrollTo(0);
    })
}

locoScroll();

var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector("#page2");

elems.forEach(function(ele){
    ele.addEventListener("mouseenter", function(){
        var bgimg = ele.getAttribute("data-img");
        page2.style.backgroundImage = `url(${bgimg})`;
})
})

const i = document.querySelector("#rnav i");

i.addEventListener("click", function() {
    i.style.transform = "rotate(135deg)";
});

