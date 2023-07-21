# Screen Recorder Extension
Dual Screen Recording Chrome Extension (Manifest V3)

This repository provides a unique example of a Chrome extension that enables simultaneous screen recording of two screens using Manifest V3. It utilizes the RecordRTC library to facilitate screen recording capabilities. Unlike other screen recording extensions that solely support single-screen capture, this extension allows you to record content from two screens simultaneously.

# Libraries used

The extension incorporates the following library:

RecordRTC: RecordRTC is a WebRTC JavaScript library that simplifies media recording in the browser. It enables the recording of video, audio, and screen streams, making it an ideal choice for implementing screen recording functionalities.

# Installation

To install and use this extension, follow the steps below:
<ul>
<li>Clone this repository to your local machine or download it from this link https://chrome.google.com/webstore/detail/my-screen-recorder/aedhignmopjmfhnlbhimfmcbhmlfcjjf?hl=en-GB&authuser=0</li>
<li>Open the Google Chrome browser and navigate to chrome://extensions/.</li>
<li>Enable the "Developer mode" toggle located in the top right corner.</li>
<li>Click the "Load unpacked" button and select the directory where you cloned this repository.</li>
</ul>

# Usage
To start recording content from two screens, follow these steps:
<ul>
<li>Click on the extension icon situated in the top right corner of the browser.</li>
<li>Press the "Start Recording" button to initiate screen recording.</li>
<li>Select the desired content on both screens that you wish to capture.</li>
<li>To stop the recording, click on the "Stop Sharing" button.</li>
</ul>



# Known issues

Manual Screen Selection: The extension requires users to manually select screens one by one for recording. It does not capture both screens simultaneously,

# Credits

The Screen Recorder Chrome Extension was inspired by the contributions and insights from various online tutorials and resources. Special thanks to the following references:

Tutorial on WebRTC and RecordRTC


https://github.com/wireworks-app/chrome-screen-recording

# License

The Screen Recorder Chrome Extension is open-source and licensed under the AGPL-3.0 license. Feel free to contribute, modify, and use the extension as per the license terms.


