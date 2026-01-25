const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const preview = document.getElementById("preview");
const startCamBtn = document.getElementById("startCam");
const snapBtn = document.getElementById("snap");

startCamBtn.onclick = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (err) {
    alert("Camera access denied!");
  }
};

snapBtn.onclick = () => {
  const context = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  const imageData = canvas.toDataURL("image/png");
  preview.src = imageData;
  preview.style.display = "block";
};
