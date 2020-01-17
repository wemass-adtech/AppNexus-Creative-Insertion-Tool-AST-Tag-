function injectScreentool() {
    chrome.tabs.executeScript(null, {
        allFrames: true,
        file: "inject.js"
    });
}

chrome.browserAction.onClicked.addListener(injectScreentool);