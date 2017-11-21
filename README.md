README Updated By ChrisBrown653-test

1. Link to the script source:
```html
<script src="editable-div.js"></script>
```

3. Create a container with the "editable" class:
```html
<div id="demo-div" class="editable">Click on this div to change the contents...</div>
```

The "divUpdated" event fires after the user has left the input.  The event detail contains the "newText" key which contains the input text.

Demo:
```html
<html>

<head>
</head>

<style>
#demo-div {
	font-size: 36px;
	width: 50%;
}
</style>

<body>
	<h1>Demo:</h1>
	<div id="demo-div" class="editable">Click on this div to change the contents...</div>

	<script src="editable-div.js"></script>
	<script>
		document.getElementById("demo-div").addEventListener("divUpdated", doThisAfterDivUpdate, false);
		var existingText = document.getElementById("demo-div").innerHTML;

		function doThisAfterDivUpdate(event) {
			if (event.detail.newText !== existingText) {
				window.alert("You updated the contents of the div to: \n" + event.detail.newText);
			}
		}		
	</script>
</body>

</html>
```
