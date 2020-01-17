function injectScreentool() {
  //chrome.runtime.id
  console.log("chrome executed");
  chrome.tabs.insertCSS(null, 
    {
      allFrames:false,
      file:"inject.css"
    });
    chrome.tabs.executeScript(null, {
        allFrames: false,
        file: "inject.js"
    });
}

chrome.browserAction.onClicked.addListener(injectScreentool); 