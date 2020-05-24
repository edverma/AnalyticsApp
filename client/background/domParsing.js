serverUrl = 'http://161.35.126.149:80';
let oldUrl = '';
let newUrl = '';

const ignoredUrls = [
    'about:',
    'chrome:',
    'view-as',
    'https://cdn.',
    'https://cws.',
    'https://platform.twitter.',
    'https://clients5.google',
    'https://*.clients*'
];

// TODO: Put the url in the parameters and send certain information depending on URL
chrome.webNavigation.onDOMContentLoaded.addListener((details) => {
    chrome.tabs.get( details.tabId, (tab) => newUrl = tab.url );

    ignoredUrls.forEach((igUrl) => {
       if (newUrl.startsWith(igUrl)) {
           return;
       }
    });

    if (oldUrl.localeCompare(newUrl) != 0){
        oldUrl = newUrl;
    } else{
        return;
    }

    fetch(serverUrl.concat('/urlData'), {
        method: 'post',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            id: id,
            email: email,
            url: oldUrl
        })
    })
      .then(status)
      .then(json)
      .then(function(data) {
          console.log('Request succeeded with response: ', data);
      }).catch(function(err) {
          console.log('Request failed: ', err);
    });

});

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}

function json(response) {
    return response.json()
}
