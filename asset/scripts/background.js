function injectScreentool() {
  //chrome.runtime.id
  console.log("wemas"+location.href)
  chrome.tabs.insertCSS(null, 
    {
      allFrames:false,
      file:"styles/inject.css"
    });
    chrome.tabs.executeScript(null, {
        allFrames: false,
        file: "scripts/inject.js"
    });
}

chrome.browserAction.onClicked.addListener(injectScreentool); 