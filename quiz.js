//our constants, number of questions, the quiz answer key, and their initial score.
var NUM_OF_QUESTIONS = 10;
let ANSWER_KEY = ['A','C','D','B','C','A','A','D','A','C'];



function main(){

    //get user answers and calculate score
    var userAnswers = getUserAnswers();
    var score = calculateScore(userAnswers);

    //print message
    alert("You scored "+score + "/"+NUM_OF_QUESTIONS);

}




function getUserAnswers(){
    var questions = [];
    var userAnswers = [];

    //Loop through every question in the form. Access it by it's name, then we will loop through the radio buttons to see which was selected
    for(var i = 0; i<NUM_OF_QUESTIONS;i++){
        questions[i] = document.getElementsByName("q"+(i+1));

        //loop through the buttons
        for(var j=0; j<questions[i].length;j++){

            //if its selected, add it to the userAnswers array and break since we found the selected button.
            if(questions[i][j].checked){
                userAnswers[i] = questions[i][j].value;

                //We're also going to highlight the text green if its correct, red if its incorrect.
                //First, we need to get the label
                var label = questions[i][j].labels[0];

                //apply color
                if(userAnswers[i]==ANSWER_KEY[i]){
                    label.classList.add("correct")
                }
                else{
                    label.classList.add("incorrect");
                }

                break;
            }

            
        }
    }

    //return the array
    return userAnswers;

}


function calculateScore(userAnswer){
    //initialize
    var score = 0;

    //loop through both the user's answers and the answer key. If they match, their score goes up by one.
    for(var i=0;i<NUM_OF_QUESTIONS;i++){
        if(userAnswer[i]===ANSWER_KEY[i]){
            score++;
        }
    }

    return score;
}


//when the user submits their quiz, the answer field that they selected for a specific question will either be hilighted red or green
//based on whether they go the question correct or not
