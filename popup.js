chrome.tabs.query({windowType:'normal'}, function(tabs) {
    console.log('Number of open tabs in all normal browser windows:',tabs.length);
}); 
