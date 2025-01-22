chrome.runtime.onInstalled.addListener(() => {
  console.log("Chrome Extension Installed");
});

chrome.webNavigation.onCompleted.addListener(
  function (details) {
    if (details.url.includes("kick.com")) {
      console.log("This is Kick");
    }
  },
  { url: [{ urlMatches: "https://www.kick.com/*" }] }
);
