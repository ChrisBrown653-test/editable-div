var keyPressed;

function hasClass(elem, className) {
    return elem.className.split(' ').indexOf(className) > -1;
}

function convertToInput(z_divElement) {
	if (hasClass(z_divElement, 'editable')) {
		var defaultInputText = z_divElement.innerHTML;
		z_divElement.innerHTML = '<input type="text" value="' + defaultInputText + '"></input>';
		
		inputBox = z_divElement.getElementsByTagName("input")[0];

		inputBox.style.fontFamily = "inherit";
		inputBox.style.fontSize   = "inherit";
		inputBox.style.fontWeight = "inherit";
		inputBox.style.textAlign  = "inherit";
		inputBox.style.width      = "100%";
		
		inputBox.select();
		
		inputBox.onblur = function(e) {
			if (!keyPressed) {
				z_divElement.innerHTML = this.value;
				triggerDivUpdateEvent(z_divElement, this.value)
			};
		}

		inputBox.onkeypress = function(e) {
			if (e.key === "Enter") {
				keyPressed = true;
				z_divElement.innerHTML = this.value;
				triggerDivUpdateEvent(z_divElement, this.value)
			}
		}
	}
}

function triggerDivUpdateEvent(updatedDiv, newText) {
	var updateEvent = new CustomEvent("divUpdated",
	{
		detail: {
			"newText": newText
		},
		bubbles: true,
		cancelable: true
	});
	updatedDiv.dispatchEvent(updateEvent);	
}

document.addEventListener('click', function(e) {
	var divElement = e.target;
    convertToInput(divElement);
}, false);

document.addEventListener('touchend', function(e) {
	var divElement = e.target;
    convertToInput(divElement);
}, false);