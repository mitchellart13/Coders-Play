// Every 0.5 seconds, reload the current date and time on the page.
setInterval(function(){ 
	document.getElementById("theDate").innerHTML = Date();
}, 500);


