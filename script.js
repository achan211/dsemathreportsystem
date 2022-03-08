var data = [
    {
        "year": "2021", 
        "questions": ["q1", "q2"]
    }, 
    {
        "year": "2020", 
        "questions": ["q1", "q2"]
    },
    {"year": "2019", "questions": ["Change of Subject", "Simplification"]},
    {"year": "2018", "questions": ["q1", "q2"]}, 
    {"year": "2017", "questions": ["q1", "q2"]},
    {"year": "2016", "questions": ["q1", "q2"]}
]

function Test(){
    alert("Test is successful!");
}

function byYear(Year){
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
        alert("Question " + queNo + " is " + questions[x]);
    }
}