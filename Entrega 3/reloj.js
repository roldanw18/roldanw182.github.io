function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const hoursSpan = document.querySelector('.hours');
  const minutesSpan = document.querySelector('.minutes');
  const secondsSpan = document.querySelector('.seconds');

  hoursSpan.textContent = hours < 10 ? `0${hours}` : hours;
  minutesSpan.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsSpan.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

setInterval(updateTime, 1000);

