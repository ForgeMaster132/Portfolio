const getRandomInt = (min, max) => {
  const ceilMin = Math.ceil(min);
  const floorMax = Math.floor(max);
  return Math.floor(Math.random() * (floorMax - ceilMin + 1)) + ceilMin;
};

const newColor = () => getRandomInt(1, 255);

const findDiff = (oldVal, newVal) => (newVal - oldVal) / 60;

function updateClock() {
  let newRed = newColor();
  let newGreen = newColor();
  let newBlue = newColor();

  let redInterval = findDiff(newRed, newColor());
  let greenInterval = findDiff(newGreen, newColor());
  let blueInterval = findDiff(newBlue, newColor());

  const tick = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const paddedMinutes = (minutes < 10 ? "0" : "") + minutes;
    const paddedSeconds = (seconds < 10 ? "0" : "") + seconds;
    const currentTimeString = `${hours}:${paddedMinutes}:${paddedSeconds}`;
    document.getElementById("clock").textContent = currentTimeString;

    newRed += redInterval;
    newGreen += greenInterval;
    newBlue += blueInterval;

    document.body.style.backgroundColor = `rgb(${newRed},${newGreen},${newBlue})`;
  };

  for (let i = 1; i <= 60; i++) {
    setTimeout(tick, 1000 * i);
  }

  setInterval(() => {
    redInterval = findDiff(newRed, newColor());
    greenInterval = findDiff(newGreen, newColor());
    blueInterval = findDiff(newBlue, newColor());

    for (let i = 1; i <= 60; i++) {
      setTimeout(tick, 1000 * i);
    }
  }, 60000);
}

updateClock();

