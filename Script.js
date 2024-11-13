const inputText = document.getElementById("TodoTitle");
const list = document.getElementById("todos");
const countdown = document.getElementsByClassName("countdown")[0];
let initalCount = 10;
const timer = setInterval(Countdown, 1000);

function Countdown() {
  initalCount -= 1;
  countdown.innerText = initalCount;
  if (initalCount < 0) {
    clearInterval(timer);
    countdown.innerText = "Timer Done!!!";
  }
}

const Todos = [];
function onClickSubmitButton() {
  Todos.push(inputText.value);
  inputText.value = "";
  Todos.forEach((todo) => {
    list.innerHTML += "<li>" + todo + "</li>";
  });
}
