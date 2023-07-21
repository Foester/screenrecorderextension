# screenrecorderextension
Dual Screen Recording Chrome Extension (Manifest V3)

This repository provides a unique example of a Chrome extension that enables simultaneous screen recording of two screens using Manifest V3. It utilizes the RecordRTC library to facilitate screen recording capabilities. Unlike other screen recording extensions that solely support single-screen capture, this extension allows you to record content from two screens simultaneously.

Libraries Used

The extension incorporates the following library:

RecordRTC: RecordRTC is a WebRTC JavaScript library that simplifies media recording in the browser. It enables the recording of video, audio, and screen streams, making it an ideal choice for implementing screen recording functionalities.

Installation

To install and use this extension, follow the steps below:

Clone this repository to your local machine or download it from this link https://chrome.google.com/webstore/detail/my-screen-recorder/aedhignmopjmfhnlbhimfmcbhmlfcjjf?hl=en-GB&authuser=0
Open the Google Chrome browser and navigate to chrome://extensions/.
Enable the "Developer mode" toggle located in the top right corner.
Click the "Load unpacked" button and select the directory where you cloned this repository.

Usage

To start recording content from two screens, follow these steps:

Click on the extension icon situated in the top right corner of the browser.
Press the "Start Recording" button to initiate screen recording.
Two extension tabs will open, each pinned and without titles, representing the two screens available for recording.
Select the desired content on both screens that you wish to capture.
To stop the recording, click on the "Stop Sharing" button.

Problem Statement

Manual Screen Selection: The extension requires users to manually select screens one by one for recording. It does not capture both screens simultaneously,


