const counter = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const heart = document.getElementById('heart')
const pause = document.getElementById('pause')
let timer = setInterval(incrementCounter, 1000)
const likes = document.getElementsByClassName('likes')



minus.addEventListener('click', decrementCounter);
plus.addEventListener('click', incrementCounter);
pause.addEventListener('click', pauseCounter);
heart.addEventListener('click', heartHandler)

function decrementCounter() {
    let result = parseInt(counter.innerText)
    result--
    counter.innerHTML = result
}

function incrementCounter() {
    let result = parseInt(counter.innerText)
    result++
    counter.innerHTML = result
}

function pauseCounter() {
    if (pause.innerText === 'pause') {
        clearInterval(timer)
        toggleButton()
        pause.innerText = 'resume'
    }
    else {
        timer = setInterval(incrementCounter, 1000)
        toggleButton()
        pause.innerText = 'pause'
    }
}

function heartHandler() {
  //scratched, work on later
}

function toggleButton() {
    minus.disabled = !minus.disabled
    plus.disabled = !plus.disabled
    heart.disabled = !heart.disabled
}
