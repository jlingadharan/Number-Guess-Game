let guessNum = Math.floor(Math.random() * 100) + 1

const userInput = document.getElementById("user-input")
const submitBtn = document.getElementById("submit");
const guessesInfo = document.getElementById("guesses-info")
const resultInfo = document.getElementById("result")
const restartBtn = document.getElementById("start-new-game")
const guessesMessage = document.getElementById("guesses-message")

restartBtn.style.display = "none"
restartBtn.style.display = "none"
guessesMessage.style.display = "none"
guessesInfo.style.display = "none"
guessesInfo.innerText = "Guesses numbers:"
resultInfo.style.display = "none"

userInput.focus();

const resultText = (boolean) => {
  resultInfo.style.display = "block"
  if (boolean) {
    resultInfo.innerText = "Congrats!!!"
    resultInfo.style.backgroundColor = "green"
    submitBtn.disabled = true
    restartBtn.style.display = "block"
  } else {
    resultInfo.innerText = "Wrong!!!"
    resultInfo.style.backgroundColor = "red"
  }
}

const guessesMessageAdding = (value) => {
  guessesMessage.style.display = "block"
  if (value < guessNum) {
    guessesMessage.innerText = "Your guess was low!"
  } else {
    guessesMessage.innerText = "Your guess was high!"
  }
}

submitBtn.addEventListener('click', () => {
  if (userInput.value == guessNum) {
    resultText(true);
    submitBtn.disabled = true
  } else {
    guessesInfo.innerText = guessesInfo.innerText + ' ' + userInput.value
    guessesInfo.style.display = "block"
    resultText(false);
    guessesMessageAdding(userInput.value)
  }
  userInput.value = ""
})

restartBtn.addEventListener('click', () => {
  restartBtn.style.display = "none"
  restartBtn.style.display = "none"
  guessesMessage.style.display = "none"
  guessesInfo.style.display = "none"
  resultInfo.style.display = "none"
  guessesInfo.innerText = "Guesses numbers:"
  submitBtn.disabled = false


  guessNum = Math.floor(Math.random() * 100) + 1
  console.log("corr: ",guessNum)
  userInput.value = ""
})