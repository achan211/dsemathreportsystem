var data = [
    {
        "year": "2021", 
        "questions": ["Simplification", "Change of Subject", "Factorization"]
    }, 
    {
        "year": "2020", 
        "questions": ["q1", "q2"]
    },
    {
        "year": "2019", 
        "questions": ["Change of Subject", "Simplification"]
    }
]

function Test(){
    alert("Test is successful!");
}

function byYear(Year){
    var div = document.querySelector('#yearResult');
    if (div != null){
        div.innerHTML = '';
    } 
    for (var i = 0; i < data.length; i++){
        if (data[i].year == Year.value){
            generateYearReport(i);
        }
    }
}

function generateYearReport(i){
    questions = data[i].questions;
    for (var x = 0; x < questions.length; x++){
        queNo = x + 1;
        let newQuestion = document.createElement("p");
        newQuestion.innerHTML = "Question " + queNo + " is " + questions[x];
        document.querySelector("#yearResult").appendChild(newQuestion);
    }
}