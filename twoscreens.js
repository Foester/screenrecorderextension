let mediaRecorders = [];

async function startTwoScreensRecording() {
  const screenSources = ['screen', 'screen'];

  for (let i = 0; i < screenSources.length; i++) {
    const constraints = {
      video: {
        cursor: 'motion'
      },
      audio: false,
    };

    const stream = await navigator.mediaDevices.getDisplayMedia(constraints);
    const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
    mediaRecorders.push(mediaRecorder);

    mediaRecorder.start();
    mediaRecorder.ondataavailable = function(e) {
      if (e.data.size > 0) {
        const url = URL.createObjectURL(e.data);
        const a = document.createElement('a');
        a.href = url;
        a.download = `screencast-${i + 1}.webm`;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    };
  }
}

async function stopTwoScreensRecording(sendResponse) {
  mediaRecorders.forEach((mediaRecorder) => {
    mediaRecorder.stop();
  });

  mediaRecorders = [];
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.name === 'startTwoScreensRecording') {
    startTwoScreensRecording();
  } else if (request.name === 'stopTwoScreensRecording') {
    stopTwoScreensRecording();
  }
});