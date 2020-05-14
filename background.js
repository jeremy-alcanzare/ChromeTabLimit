 chrome.browserAction.onClicked.addListener(
	function(tab) { alert('icon clicked')});

chrome.browserAction.setBadgeBackgroundColor({ color: [59, 196, 176, 255] });
updateTabNumber() 
chrome.tabs.onUpdated.addListener(function(tabs)
{
updateTabNumber() 
});

chrome.tabs.onRemoved.addListener(function(tabs)
{
updateTabNumber() 
});

function updateTabNumber() {
	chrome.tabs.query({
    active: false,
    currentWindow: true,
}, function(tabs) {
chrome.browserAction.setBadgeText({text: tabs.length.toString()}); 
});
}