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

$(document).ready(function(){
    $("#start").click(function() {
        $('html, body').animate({
            scrollTop: $("#subHero").offset().top
        }, 800);
    });
});


/* textShown */ 

$(document).ready(function(){
    $("#songList .right-pointer").click(function(){
        $("#text1").removeClass("reverseMarginLeft");
        $("#text1").addClass("marginLeft");
        $("#songList .left-pointer").fadeIn(500);
    });
    $("#songList .left-pointer").click(function(){
        $("#text1").addClass("reverseMarginLeft");
        $("#songList .left-pointer").hide();
    });
    $("#poemList .right-pointer").click(function(){
        $("#poem1").removeClass("reverseMarginLeft");
        $("#poem1").addClass("marginLeft");
        $("#poemList .left-pointer").fadeIn(500);
    });
    $("#poemList .left-pointer").click(function(){
        $("#poem1").addClass("reverseMarginLeft");
        $("#poemList .left-pointer").hide();
    });
    $("a").click(function(){
        $("#select").hide();
    });
    $("#text1").click(function(){
        $("#songText").load("https://sebastiano-g.github.io/Workin-pro-g-ress-/texts/text1.html");
        console.log(this.attr('id'));
        var attr = $("#poemText").attr('class');
        if (typeof attr !== 'undefined' && attr !== false) {
            $("#songText").addClass("activeSecond");
        }
        else {
            $("#songText").addClass("active");
        }
    });
    $("#text2").click(function(){
        $("#songText").load("https://sebastiano-g.github.io/Workin-pro-g-ress-/texts/text2.html");
        console.log($(this).attr('id'));
        var attr = $("#poemText").attr('class');
        if (typeof attr !== 'undefined' && attr !== false) {
            $("#songText").addClass("activeSecond");
        }
        else {
            $("#songText").addClass("active");
        }
    });
    $("#poem2").click(function(){
        $("#poemText").load("https://sebastiano-g.github.io/Workin-pro-g-ress-/texts/poem2.html");
        var attr = $("#songText").attr('class');
        if (typeof attr !== 'undefined' && attr !== false) {
            $("#poemText").addClass("activeSecond");
        }
        else {
            $("#poemText").addClass("active");
        }
    });
});


