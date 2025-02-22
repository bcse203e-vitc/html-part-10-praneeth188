const images = document.querySelectorAll(".gallery-image");
let topZIndex = 3;

images.forEach((image) => {
  image.addEventListener("click", function () {
    topZIndex++;
    this.style.zIndex = topZIndex;
  });
});
