var currentTabNumber = 1;
var limit = 10;
const Colors = {
   GREEN: [59, 196, 176, 255],
   YELLOW: [222, 222, 31, 255] ,
   RED: [235, 52, 52, 255],
};
Object.freeze(Colors);

chrome.browserAction.setTitle({title:"Tab Limit: 10"});
initializeTabNumber() 
//sets badge to teal
chrome.browserAction.setBadgeBackgroundColor({ color: Colors.GREEN });

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.greeting != null) {
        	limit = request.greeting;
        	chrome.browserAction.setTitle({title:"Tab Limit: " + limit});
        	determineColor();
        };
        response(request.greeting);
        return true;
    }
);

//increments badge number when button is 

chrome.tabs.onCreated.addListener(function(tab)
{
updateTabNumber(1);
determineColor();
if (currentTabNumber > limit) {
	disableTabCreation(tab);
	chrome.browserAction.setBadgeBackgroundColor({ color: Colors.RED });
	}
});

chrome.tabs.onRemoved.addListener(function(tab)
{
updateTabNumber(-1);
determineColor();
});

function initializeTabNumber() {
	chrome.tabs.query({
    active: false,
    currentWindow: true,
}, function(tabs) { 
currentTabNumber = tabs.length + 1;
chrome.browserAction.setBadgeText({text: currentTabNumber.toString()});
});
}

function updateTabNumber(delta) {
	currentTabNumber += delta;
	chrome.browserAction.setBadgeText({text: currentTabNumber.toString()});
}


function disableTabCreation(tab) {
	chrome.tabs.remove(tab.id)
}

function determineColor() {	
if (limit > 3 && currentTabNumber > limit - 3 && currentTabNumber < limit) {
	chrome.browserAction.setBadgeBackgroundColor({ color: Colors.YELLOW });
}
else if (currentTabNumber < limit) {
	chrome.browserAction.setBadgeBackgroundColor({ color: Colors.GREEN });
}
if (currentTabNumber == limit) {
	chrome.browserAction.setBadgeBackgroundColor({ color: Colors.RED });
}
if (currentTabNumber > limit) {
	chrome.browserAction.setBadgeBackgroundColor({ color: Colors.RED });
}
}