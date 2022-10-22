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
    $(".menu-item a").click(function(){
        $("#topics").addClass("topicsEntry");
    });
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
    $("#songList a").click(function(){
        $("#select").hide();
        var name = $(this).attr('id');
        var url = "https://sebastiano-g.github.io/Workin-pro-g-ress-/texts/" + name + ".html";
        $("#songText").load(url);
        var attr = $("#poemText").attr('class');
        if (typeof attr !== 'undefined' && attr !== false) {
            $("#songText").addClass("activeSecond");
        }
        else {
            $("#songText").addClass("active");
        }
    });
    $("#poemList a").click(function(){
        $("#select").hide();
        var name = $(this).attr('id');
        var url = "https://sebastiano-g.github.io/Workin-pro-g-ress-/texts/" + name + ".html";
        $("#poemText").load(url);
        var attr = $("#songText").attr('class');
        if (typeof attr !== 'undefined' && attr !== false) {
            $("#poemText").addClass("activeSecond");
        }
        else {
            $("#poemText").addClass("active");
        }
    });
    $("#text1").click(function(){
        $("#songTopics").html("<a></a>") ;
    });
    $("#poem1").click(function(){
        $("#poemTopics").html("<a>Death</a><a>Family</a><a>Music</a><a>Nature</a><a>Salvation</a><a>Sickness</a>") ;
    });
    $(".menu-item a").click(function(){
        $("#topics").addClass("topicsEntry");
    });
    $(".listTop a").click(function(){
        console.log($(this));
        var x = $(this).text();
        var newX = x.toLowerCase();
        var newClass = "." + newX;
        console.log(newClass);
        var className = "highlight" + newX
        $(newClass).addClass(className);
    });
});


