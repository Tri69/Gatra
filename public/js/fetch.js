

const ClickUrl = () => {
		var value_token = document.getElementById("submit").value;
		var div_alert = document.getElementById("url_token")
		if(value_token.length >= 5 && value_token.length != 0) {
			const url = document.getElementById("submit").value
			const div_url1 = document.getElementById("url_token");
				async function FetchApi() {
				const result = await fetch("https://gatra.ithtech.my.id/link/get", {
					method: "POST",
					headers: {
						"Content-Type" : "application/json"
					},
					body : JSON.stringify({
						linksearch : url
					})
				})
				const data = await result.json();
				div_url1.innerHTML = `<text class="text_url">${data.UrlToken}</text>`
				localStorage.setItem("url_token", data.UrlToken);
			}
			FetchApi()
		}
		div_alert.innerHTML = `<text class="text_url" style="color:red;">Url Not Found</text>`

}

