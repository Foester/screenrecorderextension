/*const startRecording = async () => {
  const tabs = await chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true});
  const currentTab = tabs[0];

  const tab = await chrome.tabs.create({
    url: chrome.runtime.getURL('recording_screen.html'),
    pinned: true,
    active: true,
  });

  await new Promise((resolve) => {
    const listener = (tabId, info) => {
      if (tabId === tab.id && info.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(listener);
        resolve();
      }
    };

    chrome.tabs.onUpdated.addListener(listener);
  });

  chrome.tabs.sendMessage(tab.id, {
    name: 'startRecordingOnBackground',
    body: {
      currentTab: currentTab,
    },
  });
};

const startScreenshot = async () => {
  const tabs = await chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true, 'currentWindow': true });
  const currentTab = tabs[0];

  const tab = await chrome.tabs.create({
    url: chrome.runtime.getURL('screenshot.html'),
    pinned: true,
    active: true,
  });

  chrome.tabs.onUpdated.addListener(async function listener(tabId, info) {
    if (tabId === tab.id && info.status === 'complete') {
      chrome.tabs.onUpdated.removeListener(listener);
      await chrome.tabs.sendMessage(tabId, {
        name: 'startScreenshotOnBackground',
        body: {
          currentTab: currentTab,
        },
      });
    }
  });
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.name === 'startRecording') {
    startRecording();
  } else if (request.name === 'startScreenshot') {
    startScreenshot();
  }
});*/

const startRecording = async () => {
  const tabs = await chrome.tabs.query({'active': true, 'lastFocusedWindow': false, 'currentWindow': false});
  const currentTab = tabs[0];

  const tab = await chrome.tabs.create({
    url: chrome.runtime.getURL('recording_screen.html'),
    pinned: true,
    active: true,
  });

  await new Promise((resolve) => {
    const listener = (tabId, info) => {
      if (tabId === tab.id && info.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(listener);
        resolve();
      }
    };

    chrome.tabs.onUpdated.addListener(listener);
  });

  chrome.tabs.sendMessage(tab.id, {
    name: 'startRecordingOnBackground',
    body: {
      currentTab: currentTab,
    },
  });
};

const startScreenshot = async () => {
  const tabs = await chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true, 'currentWindow': true });
  const currentTab = tabs[0];

  const tab = await chrome.tabs.create({
    url: chrome.runtime.getURL('screenshot.html'),
    pinned: true,
    active: true,
  });

  chrome.tabs.onUpdated.addListener(async function listener(tabId, info) {
    if (tabId === tab.id && info.status === 'complete') {
      chrome.tabs.onUpdated.removeListener(listener);
      await chrome.tabs.sendMessage(tabId, {
        name: 'startScreenshotOnBackground',
        body: {
          currentTab: currentTab,
        },
      });
    }
  });
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.name === 'startRecording') {
    startRecording();
  } else if (request.name === 'startScreenshot') {
    startScreenshot();
  }
});

























/*const startTwoScreenRecording = async () => {
  const tabs = await chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true});
  const currentTab = tabs[0];

  const tab = await chrome.tabs.create({
    url: chrome.runtime.getURL('twoscreens.html'),
    pinned: true,
    active: true,
  });

  await new Promise((resolve) => {
    const listener = (tabId, info) => {
      if (tabId === tab.id && info.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(listener);
        resolve();
      }
    };

    chrome.tabs.onUpdated.addListener(listener);
  });

  chrome.tabs.sendMessage(tab.id, {
    name: 'startTwoScreensRecording',
    body: {
      currentTab: currentTab,
    },
  });
};

const stopTwoScreenRecording = async () => {
  const tabs = await chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true});
  const currentTab = tabs[0];

  const tab = await chrome.tabs.create({
    url: chrome.runtime.getURL('twoscreens.html'),
    pinned: true,
    active: true,
  });

  await new Promise((resolve) => {
    const listener = (tabId, info) => {
      if (tabId === tab.id && info.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(listener);
        resolve();
      }
    };

    chrome.tabs.onUpdated.addListener(listener);
  });

  chrome.tabs.sendMessage(tab.id, {
    name: 'stopTwoScreensRecording',
    body: {
      currentTab: currentTab,
    },
  });
};
*/

let tabId; // global variable to store the created tab id

const startTwoScreenRecording = async () => {
  const tabs = await chrome.tabs.query({'active': true, 'lastFocusedWindow': true, 'currentWindow': true});
  const currentTab = tabs[0];

  const tab = await chrome.tabs.create({
    url: chrome.runtime.getURL('twoscreens.html'),
    pinned: true,
    active: true,
  });

  tabId = tab.id; // store the created tab id

  await new Promise((resolve) => {
    const listener = (tabId, info) => {
      if (tabId === tab.id && info.status === 'complete') {
        chrome.tabs.onUpdated.removeListener(listener);
        resolve();
      }
    };

    chrome.tabs.onUpdated.addListener(listener);
  });

  chrome.tabs.sendMessage(tab.id, {
    name: 'startTwoScreensRecording',
    body: {
      currentTab: currentTab,
    },
  });
};

const stopTwoScreenRecording = async () => {
  // if tabId exists
  if (tabId) {
    chrome.tabs.sendMessage(tabId, {
      name: 'stopTwoScreensRecording',
      body: {},
    }, () => {
      chrome.tabs.remove(tabId); // close the tab
      tabId = null; // reset tabId
    });
  }
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.name === 'startRecording') {
    startRecording();
  } else if (request.name === 'startScreenshot') {
    startScreenshot();
  } else if (request.name === 'startTwoScreenRecording') {
    startTwoScreenRecording();
  } else if (request.name === 'stopTwoScreenRecording') {
    stopTwoScreenRecording();
  }
});

