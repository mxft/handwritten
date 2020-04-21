"use strict";

window.getImage = function (canvas) {
  var imageData = canvas.toDataURL();
  var image = new Image();
  image.src = imageData;
  return image;
};

window.saveImage = function (image) {
  var link = document.createElement("a");
  link.setAttribute("href", image.src);
  link.setAttribute("download", "canvasImage");
  link.click();
};