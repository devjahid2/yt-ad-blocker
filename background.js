chrome.runtime.onInstalled.addListener(() => {
  console.log("[AdBlocker] Extension Installed");
});

chrome.runtime.onStartup.addListener(() => {
  console.log("[AdBlocker] Extension Started");
});