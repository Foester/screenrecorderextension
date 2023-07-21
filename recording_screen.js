let mediaRecorders = [];

chrome.runtime.onMessage.addListener(async (message) => {
  if (message.name !== 'startRecordingOnBackground') {
    return;
  }

  let screenSources = ['screen'];
  if (message.body.numScreens === 'two') {
    screenSources.push('screen');
  }

  for (let i = 0; i < screenSources.length; i++) {
    const constraints = {
      video: {
        cursor: 'motion',
        mediaSource: screenSources[i]
      },
      audio: false
    };

    try {
      const stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      const mediaRecorder = new MediaRecorder(stream);

      const chunks = [];

      mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
      };

      mediaRecorder.onstop = async function(e) {
        const blobFile = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blobFile);

        const a = document.createElement('a');
        a.href = url;
        a.download = `screencast-${i + 1}.webm`;
        a.click();

        // When recording is finished, send message to current tab content script with the base64 video
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          const tabWhenRecordingStopped = tabs[0];

          chrome.tabs.sendMessage(tabWhenRecordingStopped.id, {
            name: 'endedRecording',
            body: {
              base64: url,
            },
          });

          window.close();
        });

        // Stop all tracks of stream
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorders[i] = mediaRecorder;
      mediaRecorder.start();
    } catch (error) {
      console.error('Error starting recording:', error);
      window.close();
    }
  }

  // After all setup, focus on the previous tab (where the recording was requested)
  chrome.tabs.update(message.body.currentTab.id, { active: true, selected: true });
});

const fetchBlob = async (url) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const base64 = await convertBlobToBase64(blob);

  return base64;
};

const convertBlobToBase64 = (blob) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = () => {
      const base64data = reader.result;

      resolve(base64data);
    };
  });
};
