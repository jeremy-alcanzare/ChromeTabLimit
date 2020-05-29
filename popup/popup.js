var value = 0;  
var setButton = document.getElementById("setButton");
var input =  document.getElementById("tabLimit");
var tabLimitText = document.getElementById("tabLimitText");


setButton.onclick = sendData;

function sendData() {
	if (input.value != null && input.value > 0) {
		value = input.value;
	}
	else {
		tabLimitText.innerHTML = "Please enter a valid number";
		return;
	}
    chrome.runtime.sendMessage({greeting: value},
        function (response) {
        	tabLimitText.innerHTML = "Tab limit set to " + input.value.toString();
        });
}
