var currentTabNumber = 0;
var limit = 10;

//sets badge to teal
chrome.browserAction.setBadgeBackgroundColor({ color: [59, 196, 176, 255] });
updateTabNumber() 

//increments badge number when button is 
chrome.tabs.onCreated.addListener(function(tab)
{
if (currentTabNumber >= 10) {
	disableTabCreation(tab)
	}
updateTabNumber() 
});

chrome.tabs.onRemoved.addListener(function(tab)
{
updateTabNumber() 
});


function updateTabNumber() {
	chrome.tabs.query({
    active: false,
    currentWindow: true,
}, function(tabs) {
chrome.browserAction.setBadgeText({text: (tabs.length + 1).toString()}); 
currentTabNumber = tabs.length + 1;
});
}

function disableTabCreation(tab) {
	chrome.tabs.remove(tab.id)
}
