chrome.runtime.onInstalled.addListener((()=>{console.log("from background")})),chrome.bookmarks.onCreated.addListener((()=>{console.log("im just booked this page")}));