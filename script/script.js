document.getElementById("tab2-content").style.display = "none";
document.getElementById("tab3-content").style.display = "none";
document.getElementById("tab4-content").style.display = "none";
document.getElementById("tab5-content").style.display = "none"; 

document.getElementById("tabBtn-1").addEventListener("click", function () {
    //=== show content of tab-2 ===
    document.getElementById("tab1-content").style.display = "block";
    document.getElementById("tab2-content").style.display = "none";
    document.getElementById("tab3-content").style.display = "none";
    document.getElementById("tab4-content").style.display = "none";
    document.getElementById("tab5-content").style.display = "none";  

    document.getElementById("icon1").style.display = "inherit";
});

document.getElementById("tabBtn-2").addEventListener("click", function () {
    //=== show content of tab-2 ===
    document.getElementById("tab1-content").style.display = "none";
    document.getElementById("tab2-content").style.display = "block";
    document.getElementById("icon1").style.display = "inherit";
    document.getElementById("icon2").style.display = "inherit";
});
document.getElementById("tabBtn-3").addEventListener("click", function () {

    //=== show content of tab-3 ===
    document.getElementById("tab1-content").style.display = "none";
    document.getElementById("tab2-content").style.display = "none";
    document.getElementById("tab3-content").style.display = "block";

    document.getElementById("icon1").style.display = "inherit";
    document.getElementById("icon2").style.display = "inherit";
    document.getElementById("icon3").style.display = "inherit";
});

document.getElementById("tabBtn-4").addEventListener("click", function () {
    //=== show content of tab-4 ===
    document.getElementById("tab1-content").style.display = "none";
    document.getElementById("tab2-content").style.display = "none";
    document.getElementById("tab3-content").style.display = "none";
    document.getElementById("tab4-content").style.display = "block";

    // display first four icons when tab4 button is clicked
    const icons = document.querySelectorAll("#icon1, #icon2, #icon3, #icon4");
    for(let key in icons){
        icons[key].style.display = 'inherit';
    }

});
document.getElementById("tabBtn-5").addEventListener("click", function () {
    //=== show content of tab-5 ===
    document.getElementById("tab1-content").style.display = "none";
    document.getElementById("tab2-content").style.display = "none";
    document.getElementById("tab3-content").style.display = "none";
    document.getElementById("tab4-content").style.display = "none";
    document.getElementById("tab5-content").style.display = "block";

    // display all icons when tab5 button is clicked
    const icons1 = document.querySelectorAll("#icon1, #icon2, #icon3, #icon4, #icon5");
    for(let key1 in icons1){
        icons1[key1].style.display = 'inherit';
    }
});



