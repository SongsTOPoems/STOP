document.addEventListener("DOMContentLoaded", function(event) {
    document.addEventListener("scroll", function(event) { 
        const animatedNav = document.getElementById("navbar");
        const animatedCov = document.getElementsByClassName("cov");
        const windowOffsetTop = window.innerHeight - 60;
        if (window.scrollY >= windowOffsetTop) {
            addClass(animatedNav, "navBg");
        }
        else {
            if (animatedNav.hasAttribute('class')) {
                animatedNav.classList.remove("navBg");
            }
        }
        const a = animatedCov[0];
        const b = animatedCov[1];
        if ((window.innerHeight + window.scrollY) >= a.offsetTop) {
            addClass(a, "slider1");
        }
        if ((window.innerHeight + window.scrollY) >= b.offsetTop) {
            addClass(b, "slider2");
        }
    });
});

function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
}

$("#teamButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#sectionThree").offset().top
    }, 2000);
});
