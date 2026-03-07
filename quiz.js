//our constants, number of questions, the quiz answer key, and their initial score.
var NUM_OF_QUESTIONS = 10;
let ANSWER_KEY = ['A','C','D','B','C','A','A','D','A','C'];



function main(){

    var userAnswers = getUserAnswers();
    var score = calculateScore(userAnswers);

    alert("You scored "+score + "/"+NUM_OF_QUESTIONS);

}




function getUserAnswers(){
    var questions = [];
    var userAnswers = [];

    for(var i = 0; i<NUM_OF_QUESTIONS;i++){
        questions[i] = document.getElementsByName("q"+(i+1));

        for(var j=0; j<questions[i].length;j++){

            if(questions[i][j].checked){
                userAnswers[i] = questions[i][j].value;
                break;
            }
        }
    }

    return userAnswers;

}


function calculateScore(userAnswer){
    var score = 0;

    for(var i=0;i<NUM_OF_QUESTIONS;i++){
        if(userAnswer[i]===ANSWER_KEY[i]){
            score++;
        }
    }
    return score;
}
