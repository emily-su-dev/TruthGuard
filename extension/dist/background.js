"use strict";
chrome.runtime.onInstalled.addListener(() => {
    console.log("Misinfo Detector Installed!");
});
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["dist/content.js"]
    });
});
