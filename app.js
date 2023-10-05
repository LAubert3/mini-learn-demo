var dingSound = new Audio("./sounds/ding.mp3");
var noSound = new Audio("./sounds/no.mp3");
var deckSelect = document.getElementById("deck");
var deckImage = document.getElementById("deck_image");
var buttons = document.getElementsByClassName("btnStyle");
var timeDiv = document.getElementById("time");
var imgs = document.getElementsByClassName("card_image");
var deckImages = [];
var currentImage = 0;
var correctButton = 0;
var score = 0;
var health = 10;
var div = document.getElementById("time");
div.style.width = "300px";
var myDeck = document.getElementById("deck");

questions = [
    "./img/deckQuestions/image1.png", "./img/deckQuestions/image2.png", "./img/deckQuestions/image3.png",
    "./img/deckQuestions/image4.png", "./img/deckQuestions/image5.png", "./img/deckQuestions/image6.png",
    "./img/deckQuestions/image7.png", "./img/deckQuestions/image8.png", "./img/deckQuestions/image9.png",
    "./img/deckQuestions/image10.png", "./img/deckQuestions/image11.png", "./img/deckQuestions/image12.png",
    "./img/deckQuestions/image13.png", "./img/deckQuestions/image14.png", "./img/deckQuestions/image15.png",
    "./img/deckQuestions/image16.png", "./img/deckQuestions/image17.png", "./img/deckQuestions/image18.png",
    "./img/deckQuestions/image19.png", "./img/deckQuestions/image20.png", "./img/deckQuestions/image21.png",
    "./img/deckQuestions/image22.png", "./img/deckQuestions/image23.png", "./img/deckQuestions/image24.png",
    "./img/deckQuestions/image25.png", "./img/deckQuestions/image26.png", "./img/deckQuestions/image27.png",
    "./img/deckQuestions/image28.png", "./img/deckQuestions/image29.png", "./img/deckQuestions/image30.png",
    "./img/deckQuestions/image31.png", "./img/deckQuestions/image32.png", "./img/deckQuestions/image33.png",
    "./img/deckQuestions/image34.png", "./img/deckQuestions/image35.png", "./img/deckQuestions/image36.png",
    "./img/deckQuestions/image37.png", "./img/deckQuestions/image38.png", "./img/deckQuestions/image39.png",
    "./img/deckQuestions/image40.png", "./img/deckQuestions/image41.png", "./img/deckQuestions/image42.png",
    "./img/deckQuestions/image43.png", "./img/deckQuestions/image44.png", "./img/deckQuestions/image45.png",
    "./img/deckQuestions/image46.png", "./img/deckQuestions/image47.png", "./img/deckQuestions/image48.png",
    "./img/deckQuestions/image49.png", "./img/deckQuestions/image50.png", "./img/deckQuestions/image51.png",
    "./img/deckQuestions/image52.png", "./img/deckQuestions/image53.png", "./img/deckQuestions/image54.png",
    "./img/deckQuestions/image55.png", "./img/deckQuestions/image56.png", "./img/deckQuestions/image57.png", "./img/deckQuestions/image58.png"
];

answers = [
    "./img/deckAnswers/image1.png", "./img/deckAnswers/image2.png", "./img/deckAnswers/image3.png",
    "./img/deckAnswers/image4.png", "./img/deckAnswers/image5.png", "./img/deckAnswers/image6.png",
    "./img/deckAnswers/image7.png", "./img/deckAnswers/image8.png", "./img/deckAnswers/image9.png",
    "./img/deckAnswers/image10.png", "./img/deckAnswers/image11.png", "./img/deckAnswers/image12.png",
    "./img/deckAnswers/image13.png", "./img/deckAnswers/image14.png", "./img/deckAnswers/image15.png",
    "./img/deckAnswers/image16.png", "./img/deckAnswers/image17.png", "./img/deckAnswers/image18.png",
    "./img/deckAnswers/image19.png", "./img/deckAnswers/image20.png", "./img/deckAnswers/image21.png",
    "./img/deckAnswers/image22.png", "./img/deckAnswers/image23.png", "./img/deckAnswers/image24.png",
    "./img/deckAnswers/image25.png", "./img/deckAnswers/image26.png", "./img/deckAnswers/image27.png",
    "./img/deckAnswers/image28.png", "./img/deckAnswers/image29.png", "./img/deckAnswers/image30.png",
    "./img/deckAnswers/image31.png", "./img/deckAnswers/image32.png", "./img/deckAnswers/image33.png",
    "./img/deckAnswers/image34.png", "./img/deckAnswers/image35.png", "./img/deckAnswers/image36.png",
    "./img/deckAnswers/image37.png", "./img/deckAnswers/image38.png", "./img/deckAnswers/image39.png",
    "./img/deckAnswers/image40.png", "./img/deckAnswers/image41.png", "./img/deckAnswers/image42.png",
    "./img/deckAnswers/image43.png", "./img/deckAnswers/image44.png", "./img/deckAnswers/image45.png",
    "./img/deckAnswers/image46.png", "./img/deckAnswers/image47.png", "./img/deckAnswers/image48.png",
    "./img/deckAnswers/image49.png", "./img/deckAnswers/image50.png", "./img/deckAnswers/image51.png",
    "./img/deckAnswers/image52.png", "./img/deckAnswers/image53.png", "./img/deckAnswers/image54.png",
    "./img/deckAnswers/image55.png", "./img/deckAnswers/image56.png", "./img/deckAnswers/image57.png", "./img/deckAnswers/image58.png"
];

//-------------------------------
function endGame() {
    window.alert("Game over! Your score is " + score + " and your health is " + health + ".");
    location.reload();
}

function checkHealth() {
    if (health <= 0) {
        endGame();
    }
}

//-----------------------------
function setGameDisplayProperties() {
    var gameDis = document.getElementById("deck_image");
    if (gameDis.style.backgroundImage !== "url(./img/hillsunset.png)") {
        gameDis.style.width = "500px";
        gameDis.style.height = "400px";
    }
}

function reduceWidth() {
    var currentWidth = parseInt(div.style.width, 10);
    if (currentWidth > 50) {
        var newWidth = currentWidth - (currentWidth / 3);
        div.style.width = newWidth + "px";
    } else {
        noSound.play();
        health--;
        clearInterval(interval);
        div.style.width = "300px";
        if (health !== 0) {
            generateOptions();
            div.style.width = "300px";
            startReduceWidth();
        }
    }
}
var interval;

function startReduceWidth() {
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(reduceWidth, 5000);
}

//Fisher-Yates algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//START-----------------------------------------------------------------------
function startGame() {
    var deck = deckSelect.value;
    if (deck !== "Begin") {
        if (window.confirm("Start?")) {
            deckImages = getDeckImages(deck);
            currentImage = Math.floor(Math.random() * deckImages.length);
            score = 0;
            health = 10;

            deckImage.src = deckImages[currentImage].question;

            generateOptions();

            setGameDisplayProperties();
            showGameImages();

            startReduceWidth();
        } else {
            location.reload();
        }
    }
}

function showGameImages() {
    timeDiv.style.visibility = "visible";
    for (let img of imgs) {
        img.style.visibility = "visible";
    }
}
deckSelect.addEventListener("click", startGame);

//--------------------------------------------
function useOp() {
    var buttonIndex = +this.dataset.index;

    if (buttonIndex === correctButton) {
        dingSound.play();
        score++;
    } else {
        noSound.play();
        health--;
        checkHealth();
    }

    proceedToNextQuestion();
}

//-------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btnStyle');

    buttons.forEach((button, index) => {
        button.dataset.index = index;
        button.addEventListener("click", useOp);
    });
});

//---------------------------------
//Image stuff
function getDeckImages() {
    var deckImages = [];
    for (var i = 0; i < questions.length; i++) {
        deckImages.push({
            question: questions[i],
            answer: answers[i]
        });
    }
    return deckImages;
}

function proceedToNextQuestion() {
    currentImage = (currentImage + 1) % deckImages.length;  //loop around at the end

    // Shuffle the deck for the next round when starting over (optional)
    if (currentImage === 0) {
        shuffle(deckImages);
    }

    // Update the question and options
    deckImage.src = deckImages[currentImage].question;

    generateOptions();
    div.style.width = "300px";
    startReduceWidth();
}

let l = 0;
function generateOptions() {
    l += 1;
    var correctAnswer = currentImage;
    var usedOptions = [correctAnswer];

    // Generate random indices for wrong options
    for (var j = 0; j < buttons.length; j++) {
        if (j !== correctButton) {
            var wrongAnswer;
            do {
                wrongAnswer = Math.floor(Math.random() * deckImages.length);
            } while (usedOptions.includes(wrongAnswer));

            usedOptions.push(wrongAnswer);
            buttons[j].querySelector("img").src = deckImages[wrongAnswer].answer;
            //buttons[j].querySelector("button").textContent = deckImages[wrongAnswer].answer;
        }
    }

    shuffleButtons();

    // Set correct answer to randomly chosen button
    buttons[correctButton].querySelector("img").src = deckImages[correctAnswer].answer;

    if (l > questions.length * 3) {
        endGame();
    }
}

// Function to shuffle the buttons
function shuffleButtons() {
    for (var i = buttons.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        swapButtons(i, j);
    }
}

//swap positions of two buttons
function swapButtons(i, j) {
    var temp = buttons[i].querySelector("img").src;

    buttons[i].querySelector("img").src = buttons[j].querySelector("img").src;
    buttons[j].querySelector("img").src = temp;
    //-----------------------------

    if (i === correctButton) {
        correctButton = j;
    } else if (j === correctButton) {
        correctButton = i;
    }
}