const downloadButton = document.querySelector(".download-button");

const waitLogo = document.querySelector(".wait-logo");

const buttonText = document.querySelector(".button-text");

const downloadProgress = document.querySelector(".download-progress");

const downloadPercent = document.querySelector(".download-percent");

let i = 0;

downloadButton.addEventListener("click", function () {
  downloadButton.style.width = "45px";
  buttonText.style.opacity = "0";
  waitLogo.classList.add("wait-logo-animation");
  waitLogo.style.opacity = "1";
  setTimeout(function () {
    waitLogo.style.opacity = "0";
  }, 2000);
  setTimeout(function () {
    downloadButton.style.width = "170px";
  }, 2200);
  setTimeout(function () {
    downloadPercent.style.opacity = "1";
    downloadProgress.classList.add("download-progress-animation");
    setInterval(progressPercent, 30);
  }, 2400);
  setTimeout(function () {
    downloadButton.style.width = "45px";
  }, 5800);
});

function progressPercent() {
  if (i < 100) {
    i++;
    downloadPercent.innerText = i + "%";
  }
  setTimeout(function () {
    downloadPercent.innerHTML = '<i class="fas fa-check"></i>';
    downloadPercent.style.fontSize='30px';
    downloadPercent.style.color='#006400';
  }, 3650);
}
