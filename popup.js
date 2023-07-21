
/*document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is fully loaded.');
  const screenshotBtn = document.getElementById('takeScreenshotBtn');
  if (screenshotBtn) {
    console.log('Screenshot button found.');
    screenshotBtn.addEventListener('click', function() {
      console.log('Screenshot button clicked.');
      chrome.runtime.sendMessage({ name: 'startScreenshot' });
    });
  } else {
    console.log('Screenshot button not found.');
  }
  
  const recordingBtn = document.getElementById('startRecordingButton');
  if (recordingBtn) {
    console.log('Recording button found.');
    recordingBtn.addEventListener('click', startRecording);
  } else {
    console.log('Recording button not found.');
  }
});

const startRecording = () => {
  console.log('Start recording function is called.');
  chrome.runtime.sendMessage({ name: 'startRecording' });
};
*/


document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is fully loaded.');
  const screenshotBtn = document.getElementById('takeScreenshotBtn');
  if (screenshotBtn) {
    console.log('Screenshot button found.');
    screenshotBtn.addEventListener('click', function() {
      console.log('Screenshot button clicked.');
      chrome.runtime.sendMessage({ name: 'startScreenshot' });
    });
  } else {
    console.log('Screenshot button not found.');
  }
  
  const recordingBtn = document.getElementById('startRecordingButton');
  if (recordingBtn) {
    console.log('Recording button found.');
    recordingBtn.addEventListener('click', startRecording);
  } else {
    console.log('Recording button not found.');
  }

  const twoScreenBtn = document.getElementById('twoscreenBtn');
  if (twoScreenBtn) {
    console.log('Two screen button found.');
    twoScreenBtn.addEventListener('click', () => {
      console.log('Two screen button clicked.');
      chrome.runtime.sendMessage({name: 'startTwoScreenRecording'});
    });
  } else {
    console.log('Two screen button not found.');
  }
});

const startRecording = () => {
  console.log('Start recording function is called.');
  chrome.runtime.sendMessage({ name: 'startRecording' });
};

document.getElementById('stopRecordingBtn').addEventListener('click', () => {
  chrome.runtime.sendMessage({name: 'stopTwoScreenRecording'});
});
