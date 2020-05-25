let id;
let email;

chrome.tabs.onCreated.addListener(() => {
  chrome.identity.getProfileUserInfo( (userInfo) => {
    id = userInfo.id;
    email = userInfo.email;
  });
});
