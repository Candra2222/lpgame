document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");
  video.autoplay = true;
  video.load();

  setTimeout(function () {
    document.getElementById("popup").style.display = "flex";
    video.pause();
  }, 4000);
});
