const URIRedirect = document.getElementById("URIReal");

setTimeout(()=> {
	const URI = URIRedirect.textContent;
	window.location.href = URI;
}, 3000);