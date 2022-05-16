var startBtn = document.getElementById("start-button");

var startQuiz = function () {
    setTimeout(() => {
    window.location.assign('question.html')
    }, 1000)
}

startBtn.addEventListener('click', startQuiz)