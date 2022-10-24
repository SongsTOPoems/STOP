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

const poem1 = ["Death", "Family", "Music", "Nature", "Salvation", "Sickness"];
const poem2 = [];
const poem3 = [];
const poem4 = [];
const poem5 = [];
const poem6 = [];
const poem7 = [];
const poem8 = [];
const poem9 = [];
const song1 = [];
const song2 = [];
const song3 = [];
const song4 = [];
const song5 = [];
const song6 = [];
const song7 = [];
const song8 = [];
const song9 = [];


function generatorP(l) {
    var start = "<a onclick='topss(this)'>";
    var end = "</a>";
    var newString = "<h4>Poem</h4>";
    for (let i = 0; i < l.length; i++) {
        newString = newString + start + l[i] + end;
    }
    return newString;   
}

function generatorS(l) {
    var start = "<a onclick='topss(this)'>";
    var end = "</a>";
    var newString = "<h4>Song</h4>";
    for (let i = 0; i < l.length; i++) {
        newString = newString + start + l[i] + end;
    }
    return newString;   
}

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
        $("#poemList .active").addClass("activeSecond");
        $("#poemList .active").removeClass("active");
        $(this).addClass('active');
    });
    $("#poemList a").click(function(){
        $("#select").hide();
        var name = $(this).attr('id');
        var url = "https://sebastiano-g.github.io/Workin-pro-g-ress-/texts/" + name + ".html";
        $("#poemText").load(url);
        $("#songList .active").addClass("activeSecond");
        $("#songList .active").removeClass("active");
        $(this).addClass('active');
    });
    $("#text1").click(function(){
        $("#songTopics").html("<a></a>") ;
    });
    $("#poem1").click(function(){
        var newString = generatorP(poem1);
        $("#poemTopics").html(newString) ;
    });
    $(".menu-item a").click(function(){
        $("#topics").addClass("topicsEntry");
    });
});

function topss(el) {
    const spans = document.getElementsByTagName('span');
    for (let s = 0; s < spans.length; s++) {
        if (spans[s].classList.length == 2) {
            spans[s].classList.remove(spans[s].classList[1]);
        }
    }   
    var x = el.innerText;
    var newX = x.toLowerCase();
    var className = "highlight" + newX;
    const classes = document.getElementsByClassName(newX);
    var a = 1
    for (let i = 0; i < classes.length; i++) {
        if (i < a) {
            classes[i].scrollIntoView({ behavior: 'smooth', block: "center" }, true);
        }
        classes[i].classList.add(className);
    }
}


