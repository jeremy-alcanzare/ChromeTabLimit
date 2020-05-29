var value = 0;  
var setButton = document.getElementById("setButton");
var saveButton = document.getElementById("saveButton");
var input =  document.getElementById("tabLimit");
var tabLimitText = document.getElementById("tabLimitText");


setButton.onclick = sendData;
saveButton.onclick = saveData;

function sendData() {
	if (input.value != null && input.value > 0) {
		value = input.value;
	}
	else {
		tabLimitText.innerHTML = "Please enter a valid number";
		return;
	}
    chrome.runtime.sendMessage({greeting: value, type: "send"},
        function (response) {
        	tabLimitText.innerHTML = "Tab limit set to " + input.value.toString();
        });
}

function saveData() {
	if (input.value != null && input.value > 0) {
		value = input.value;
	}
	else {
		tabLimitText.innerHTML = "Please enter a valid number";
		return;
	}
	    chrome.runtime.sendMessage({greeting: value, type: "save"},
        function (response) {
        	tabLimitText.innerHTML = "Default tab limit saved to " + input.value.toString();
        });
}
