let receiver = (message, sender, sendResponse) => {
    // sendResponse({status: true});
    // if(response == undefined || Object.keys(response).length == 0) return;
    console.log(message);
    
    // Promise.resolve(message.data).then(data => (sendResponse(message.data)));
    // return true;
};
chrome.runtime.onMessage.addListener(receiver);