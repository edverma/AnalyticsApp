chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.create({ url: 'http://127.0.0.1:80/display-analytics' });
});
