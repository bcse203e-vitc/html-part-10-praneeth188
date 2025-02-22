const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("colorPicker");
const brushSize = document.getElementById("brushSize");
const brushSizeLabel = document.getElementById("brushSizeLabel");
let isDrawing = false;

canvas.width = 700;
canvas.height = 400;

ctx.lineCap = "round";
ctx.lineJoin = "round";

function draw(e) {
  if (!isDrawing) return;

  ctx.strokeStyle = colorPicker.value;
  ctx.lineWidth = brushSize.value;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  const rect = canvas.getBoundingClientRect();
  ctx.beginPath();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

brushSize.addEventListener("input", () => {
  brushSizeLabel.textContent = `${brushSize.value}px`;
});

document.getElementById("clearCanvas").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
