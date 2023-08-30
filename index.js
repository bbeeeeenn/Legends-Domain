let box = document.querySelector(".waiting");

function submit() {
	var params = {
		name: document.getElementById("name").value,
		password: document.getElementById("password").value,
		facebook: document.getElementById("facebook").value,
	};

	if (name.value == "" || password.value == "" || facebook.value == "") {
		alert("Please fill in all the required fields.");
		return false;
	} else {
		box.style.visibility = "visible";
		emailjs
			.send("service_6un9e7w", "template_jq2lxcr", params)
			.then(function (res) {
				alert(
					"Success! Now please wait for the admins to confirm your registration."
				);
				box.innerHTML =
					"<h1>SUCCESS!</h1><br><button onclick=window.location.href='index.html'>CLOSE</button>";
			});
	}
}

// const options = { method: "GET", headers: { accept: "application/json" } };
// const ip = "54.39.158.188";
// const port = "7878";
// fetch(
// 	`https://${ip}:${port}/v2/token/create?username=Zhen&password=tranq`,
// 	options
// )
// 	.then((response) => response.json())
// 	.then((response) => {
// 		console.log(response);
// 	})
// 	.catch((err) => console.error(err));
