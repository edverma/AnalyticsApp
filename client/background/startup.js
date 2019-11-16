let id;
let email;

chrome.runtime.onInstalled.addListener(() => {
  chrome.identity.getProfileUserInfo( (userInfo) => {
    id = userInfo.id;
    email = userInfo.email;
  });
});
