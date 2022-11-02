$(document).ready(function(){
    $("#projectList").hide();
    $("#start").click(function() {
        $('html, body').animate({
            scrollTop: $("#subHero").offset().top
        }, 800);
    });
    $("#project").click(function() {
        $("#projectList").show();
        $("#projectList").addClass("active");
    });
    $("body").click(function() {
        if ($("#projectList").attr('class') != "active") {
            $("#projectList").hide();
        }
        else {
            $("#projectList").removeClass('active');
        } 
    });
});


/* textShown */ 

function getList(entry) {
    switch (entry) {
        case 'poem1':
            return (["Death", "Family", "Music", "Nature", "Salvation", "Sickness"]);
            break;
        case 'poem2':
            return (["Eternal Sleep", "Secret", "Suffering", "Nature", "Salvation", "Memory", "Writing", "Religion"]);
            break;
        case 'poem3':
            return (["Family", "Justice", "Darkness vs Light", "Knowledge"]);
            break;
        case 'poem4':
            return (["Damnation", "Church", "Death", "Religion", "Salvation", "Suffering", "Knowledge", "Nature"]);
            break;
        case 'poem5':
            return (["Sickness", "Family", "Salvation", "Nature"]);
            break;
        case 'poem6':
            return (["Writing", "Church", "Sickness", "Family", "Salvation", "Damnation", "Justice"]);
            break;
        case 'poem7':
            return (["Nature", "Family", "Damnation"]);
            break;
        case 'poem8':
            return (["Religion", "Nature", "Sight", "Writing"]);
            break;
        case 'poem9':
            return (["Salvation", "Music", "Nature"]);
            break;
        case 'text1':
            return (["Death", "Family", "Music", "Nature", "Salvation", "Sickness"]);
            break;
        case 'text2':
            return (["Death", "Writing", "Darkness vs Light", "Nature", "Salvation"]);
            break;
        case 'text3':
            return ([ "Family", "Sight", "Darkness vs Light", "Love", "Salvation", "Church", "Hate", "Justice"]);
            break;
        case 'text4':
            return ([ "Death", "Nature", "Religion", "Suffering", "Salvation", "Church", "Hate", "Justice"]);
            break;
        case 'text5':
            return ([ "Salvation", "Music", "Sickness", "Sight", "Secret", "Love", " Nature", "Church"]);
            break;
        case 'text6':
            return ([ "Writing", "Church", "Sickness", "Family", "Justice", "Damnation", " Nature"]);
            break;
        case 'text7':
            return ([ "Death", "Nature", "Suffering", "Justice", "Knowledge"]);
            break;
        case 'text8':
            return ([ "Sight", "Darkness vs Light", "Nature"]);
            break;
        case 'text9':
            return ([ "Salvation", "Nature", "Dancing", "Music"]);
            break;
    }
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
        var url = "https://songstopoems.github.io/STOP/texts/" + name + ".html";
        $("#songText").load(url);
        $("#songText").hide();
        $("#songText").fadeIn(800);
        $("#songText").addClass("activated");
        $("#songList .active").removeClass("active");
        $(this).addClass('active');
        var newString = generatorS(getList(name));
        $("#topics").html(newString) ;
    });
    $("#poemList a").click(function(){
        $("#select").hide();
        var name = $(this).attr('id');
        var url = "https://songstopoems.github.io/STOP/texts/" + name + ".html";
        $("#poemText").load(url);
        $("#poemText").hide();
        $("#poemText").fadeIn(800);
        $("#poemList .activeSecond").removeClass("activeSecond");
        $(this).addClass('activeSecond');
        var newString = generatorP(getList(name));
        $("#topics").html(newString) ;
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
    if (el.innerText == "Darkness vs Light") {
        var x = "DarknessvsLight";
    }
    else if (el.innerText == "Eternal Sleep") {
        var x = "Eternalsleep";
    }
    else {
        var x = el.innerText;
    }
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


function generatorP(l) {
    var start = "<a onclick='topss(this)'>";
    var end = "</a>";
    var oldList = activeList('poem');
    var newString = "";
    var final = removeDuplicates((oldList.concat(l)).sort());
    for (let i = 0; i < final.length; i++) {
        newString = newString + start + final[i] + end;
    }
    return newString;   
}

function generatorS(l) {
    var start = "<a onclick='topss(this)'>";
    var end = "</a>";
    var oldList = activeList('song');
    console.log(oldList);
    var newString = "";
    var final = removeDuplicates((oldList.concat(l)).sort());
    for (let i = 0; i < final.length; i++) {
        newString = newString + start + final[i] + end;
    }
    return newString;   
}

function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

function activeList(genre) {
    if (genre == 'poem') {
        var el = document.getElementsByClassName('active');
    }
    else if (genre == 'song') {
        var el = document.getElementsByClassName('activeSecond');
    }
    if (el.length > 0) {
        var elId = el[0].getAttribute("id");
        var result = getList(elId);
    }
    else {
        var result = [];
    }
    return result
}

