//this would be the object shape for storing the questions  
//you can change the questions to your own taste or even add more questions..
const questions = [
    {
        question: "Which physical fitness test is used to assess cardiovascular endurance??",
        optionA: "Push-ups test",
        optionB: "Sit and reach test",
        optionC: "Sit-ups test",
        optionD: "Cooper run test",
        correctOption: "optionD"

    },

    {
        question: "The flexibility hat s increased with the help of pot is called:",
        optionA: "Actives flexibility",
        optionB: "Passive flexibility",
        optionC: "Both (a) and (b)",
        optionD: "All ot the above",
        correctOption: "optionB"

    },

    {
        question: "Which macronutrient is the primary source of energy for the body during exercise?",
        optionA: "Protein",
        optionB: "Fat",
        optionC: "Carbohydrates",
        optionD: "Fiber",
        correctOption: "optionC"
    },

    {
        question: "The ability to maintain equilibrium when stationary or moving:",
        optionA: "Accuracy",
        optionB: "Flexibility",
        optionC: "Balance",
        optionD: "Agility",
        correctOption: "optionC"

    },

    {
        question: "Exercising for longer duration with less weight is related to Endurance ?",
        optionA: "Co-ordination",
        optionB: "Strength",
        optionC: "Speed",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "Which of the following exercises primarily targets the quadriceps muscles?",
        optionA: "Bicep curls",
        optionB: "Plank",
        optionC: "Squats",
        optionD: "Tricep dips",
        correctOption: "optionC"

    },


    {
        question: "Performing daily chores without any fatigue is: ?",
        optionA: "Mental wellness",
        optionB: "Dynamic ability",
        optionC: "Physical fitness",
        optionD: "None of these",
        correctOption: "optionC"
    },

    {
        question: "Which country is the largest in the world ?",
        optionA: "Russia",
        optionB: "Canada",
        optionC: "Africa",
        optionD: "Egypt",
        correctOption: "optionA"
    },

    {
        question: "Which of the following types of stretches should be avoided during a warm-up?",
        optionA: "Dynamic stretches",
        optionB: "Static stretches",
        optionC: "Ballistic stretches",
        optionD: "Passive stretches",
        correctOption: "optionB"
    },


    {
        question: `"What is the recommended amount of time for an adult to engage in moderate-intensity
        aerobic exercise per week?`,
        optionA: "30 minutes",
        optionB: "150 minutes",
        optionC: "300 minutes",
        optionD: "500 minutes",
        correctOption: "optionB"
    },

    {
        question: "What is the ideal heart rate range during a cardiovascular workout for maximum fat burning?",
        optionA: "50-60% of maximum heart rate",
        optionB: "60-70% of maximum heart rate",
        optionC: "70-80% of maximum heart rate",
        optionD: "80-90% of maximum heart rate",
        correctOption: "optionB"
    },


    {
        question: " What does the acronym HIIT stand for?",
        optionA: "High-Intensity Intermittent Training",
        optionB: "High-Intensity Impact Training",
        optionC: "High-Intensity Interval Training",
        optionD: "High-Intensity Integrated Training",
        correctOption: "optionC"
    },


    {
        question: "Which of the following is not a component of physical fitness ?",
        optionA: "Endurance",
        optionB: "Alertness",
        optionC: "Strength",
        optionD: "Agility",
        correctOption: "optionB"
    },








    {
        question: "Which of the following exercises is considered a compound movement?",
        optionA: "Leg extensions",
        optionB: "Bicep curls",
        optionC: " Deadlifts",
        optionD: "Calf raises",
        correctOption: "optionC"
    },

    {
        question: "How many grams of protein are recommended of body weight for an average adult",
        optionA: "0.2-0.4 g/kg",
        optionB: "0.8-1.2 g/kg",
        optionC: "1.5-2.0 g/kg",
        optionD: "2.5-3.0 g/kg",
        correctOption: "optionB"
    },


    {
        question: "Which type of exercise primarily increasing the flexibility and range of motion of joints?",
        optionA: "Cardiovascular training",
        optionB: "Strength training",
        optionC: "Stretching",
        optionD: "Circuit training",
        correctOption: "optionC"
    },


    {
        question: " What is the primary function of the latissimus dorsi muscles?",
        optionA: "Chest press movements",
        optionB: "Shoulder abduction",
        optionC: "Pulling and rowing movements",
        optionD: "Knee extension",
        correctOption: "optionC"
    }
]
window.addEventListener("load", function () {
    NextQuestion(0);
    startTimer();
});

function doSomething() {
    // Do the first action
    stopTimer();
    closeOptionModal();
    // Do the second action
    // ...
}
let startTime = 0;
let endTime = 0;
let totalTime = 0;
let timerInterval;
let timerElement = document.getElementById("timer");
let totalTimeElement = document.getElementById("totalTime");

function startTimer() {
    timerInterval = setInterval(function () {
        startTime++;
        let hours = Math.floor(startTime / 3600);
        let minutes = Math.floor((startTime - (hours * 3600)) / 60);
        let seconds = startTime - (hours * 3600) - (minutes * 60);
        timerElement.innerHTML = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    endTime = startTime;
    totalTime = endTime;
    let hours = Math.floor(totalTime / 3600);
    let minutes = Math.floor((totalTime - (hours * 3600)) / 60);
    let seconds = totalTime - (hours * 3600) - (minutes * 60);
    totalTimeElement.innerHTML = "Total time taken: " + hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
}

let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() {
    //function to shuffle and push 10 questions to shuffledQuestions array
    //app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
            //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}