import "./styles/styles.css";

const canvas = document.getElementById("canvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

const barsCount = document.getElementById("draw");
document
  .getElementById("clearDrawBtn")
  .addEventListener("click", () => (barsCount.value = ""));

const search = document.getElementById("search");
document
  .getElementById("clearSearchBtn")
  .addEventListener("click", () => (search.value = ""));

canvas.width = 1000;
canvas.height = 500;
ctx.translate(0, canvas.height);
ctx.scale(1, -1);

let bars = [];

document.getElementById("drawBtn").addEventListener("click", () => {
  let cnt = barsCount.value;
  if (parseInt(cnt) !== NaN) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bars = [];

    for (let i = 0; i < cnt; ++i) {
      let bar = {
        x: parseInt((i * canvas.width) / cnt),
        y: 0,
        width: parseInt(canvas.width / cnt - 2),
        height: parseInt(i * (canvas.height / cnt)),
        fillStyle: "black",
      };
      bars.push(bar);
    }

    for (let bar of bars) {
      ctx.fillRect(bar.x, bar.y, bar.width, bar.height);
      ctx.fillStyle = bar.fillStyle;
      ctx.fill();
    }
  }
});

document.getElementById("searchBtn").addEventListener("click", () => {
  let searchValue = parseInt(search.value);
  if (searchValue !== NaN && searchValue < parseInt(barsCount.value)) {
    console.log(bars);
  }
});
