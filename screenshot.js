chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.name === 'startScreenshotOnBackground') {
    captureScreenshot();
  }
});

function captureScreenshot() {
  const constraints = {
    video: {
      cursor: 'never',
    },
    audio: false,
  };

  navigator.mediaDevices.getDisplayMedia(constraints)
    .then((stream) => {
      const video = document.createElement('video');
      video.srcObject = stream;
      video.onloadedmetadata = () => {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/png');
        downloadScreenshot(dataUrl);
        window.close();
      };
      video.play();
    })
    .catch((error) => {
      console.error('Error accessing screen:', error);
      window.close();
    });
}

function downloadScreenshot(dataUrl) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = 'screenshot.png';
  link.click();
}
