import "./styles.css";
const countDownTitle = document.querySelector("h1");

function getTime() {
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const today = new Date().getTime();
  const dayMinus = xmasDay - today;
  const days = Math.floor(dayMinus / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (dayMinus % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((dayMinus % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((dayMinus % (1000 * 60)) / 1000);

  countDownTitle.innerText = `🎄 ${days}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m ${
    seconds < 10 ? `0${seconds}` : seconds
  }s 🎄`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
