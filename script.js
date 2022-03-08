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
        "questions": ["Change of Subject", "Simplification", "Quadratic equations + Properties of Quadrilaterals", "Factorization", "Percentages", "Inequality", "Ratio + Simultaneous Linear Equations", "Pie Chart + Probability", "Volume & Surface Areas", "Variations", "Factor Theorem", "Stem-and-Leaf + Measures of Dispersions", "Properties of Circles", "Congruent & Similar Triangles + Properties of Quadrilaterals", "Permutations and Combinations", "Sum & Product of Roots + Sequences + Logarithms", "Coordinate Geometry + Locus", "3D Trigonometry", "Completing the Square + Transformations of Graphs + Properties of Circles"]
    }
]

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
        //newQuestion.className = "lead";
        newQuestion.innerHTML = "Question " + queNo + " is " + questions[x];
        document.querySelector("#yearResult").appendChild(newQuestion);
    }
    endOfResult = document.createElement("p");
    endOfResult.className = "text-center";
    endOfResult.innerHTML = "--- End of Search Result ---"
    document.querySelector("#yearResult").appendChild(endOfResult);
}