const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let timer;



const formatTime = seconds => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return `${formattedHours} час:${formattedMinutes} минут:${formattedSeconds} секунд.`;
}

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    return formatTime(seconds)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, '');
});



buttonEl.addEventListener('click', () => {
  if (inputEl.value == '') return;

  let seconds = Number(inputEl.value);

  clearInterval(timer)

  timer = setInterval(() => {
    seconds--
    if(seconds >= 0){
      timerEl.innerHTML = animateTimer(seconds);
    }
  },1000) 
  

  inputEl.value = '';
});
