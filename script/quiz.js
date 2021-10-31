document.getElementById("nextbtn1").addEventListener("click", function(){           //==== NEXT BUTTON EVENT =====
    document.getElementById("ques2").style.display = "block";
    document.getElementById("ques1").style.display = "none";
    
});

document.getElementById("nextbtn2").addEventListener("click", function(){           //==== NEXT BUTTON EVENT =====
    document.getElementById("ques3").style.display = "block";
    document.getElementById("ques2").style.display = "none";
});

document.getElementById("nextbtn3").addEventListener("click", function(){           //==== NEXT BUTTON EVENT =====
    document.getElementById("ques4").style.display = "block";
    document.getElementById("ques3").style.display = "none";
});


document.getElementById("nextbtn4").addEventListener("click", function(){           //==== NEXT BUTTON EVENT =====
    document.getElementById("ques5").style.display = "block";
    document.getElementById("ques4").style.display = "none";
});

document.getElementById("exitbtn").addEventListener("click", function(){            //==== EXIT BUTTON EVENT =====
    alert("Your Quiz has been submitted successfully...");
    alert("If you are not satisfied from your Test, You can attempt the Quiz again");
    document.getElementById("ques5").style.display = "none";
    document.getElementById("ques1").style.display = "block";
});
let exitbtn = document.getElementById("exitbtn");
var nextbutton1 = document.getElementById("nextbtn1");
var nextbutton2 = document.getElementById("nextbtn2");
var nextbutton3 = document.getElementById("nextbtn3");
var nextbutton4 = document.getElementById("nextbtn4");


function displayCorrect(css){
    document.getElementById("correct").style.display = "block";
    document.getElementById("incorrect").style.display = "none";
    nextbutton1.disabled = false;
}

function displayIncorrect(css){
    document.getElementById("incorrect").style.display = "block";
    document.getElementById("correct").style.display = "none";
    nextbutton1.disabled = true;
}

function Q2displayCorrect(css){
    document.getElementById("Q2correct").style.display = "block";
    document.getElementById("Q2incorrect").style.display = "none";
    nextbutton2.disabled = false;
}

function Q2displayIncorrect(css){
    document.getElementById("Q2incorrect").style.display = "block";
    document.getElementById("Q2correct").style.display = "none";
    nextbutton2.disabled = true;
}

function Q3displayCorrect(css){
    document.getElementById("Q3correct").style.display = "block";
    document.getElementById("Q3incorrect").style.display = "none";
    nextbutton3.disabled = false;
}

function Q3displayIncorrect(css){
    document.getElementById("Q3incorrect").style.display = "block";
    document.getElementById("Q3correct").style.display = "none";
    nextbutton3.disabled = true;
}

function Q4displayCorrect(css){
    document.getElementById("Q4correct").style.display = "block";
    document.getElementById("Q4incorrect").style.display = "none";
    nextbutton4.disabled = false;
}

function Q4displayIncorrect(css){
    document.getElementById("Q4incorrect").style.display = "block";
    document.getElementById("Q4correct").style.display = "none";
    nextbutton4.disabled = true;
}

function Q5displayCorrect(css){
    document.getElementById("Q5correct").style.display = "block";
    document.getElementById("Q5incorrect").style.display = "none";
    exitbtn.disabled = false;
}

function Q5displayIncorrect(css){
    document.getElementById("Q5incorrect").style.display = "block";
    document.getElementById("Q5correct").style.display = "none";
    exitbtn.disabled = true;
}