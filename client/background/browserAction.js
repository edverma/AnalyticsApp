chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: `http://161.35.126.149:80/display-analytics/${id}` });
});
