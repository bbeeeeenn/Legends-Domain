const restUrlIp = "http://127.0.0.1:3118";
const restUrlOnlineIp = "https://51.210.214.79:3118";
console.log(restUrlOnlineIp);

const activeStatus = document.querySelector(".activeStatus");
function fetchData(call, endPoint, url = restUrlOnlineIp) {
	const options = { method: "GET", headers: { accept: "application/json" } };
	fetch(`${url}${endPoint}`, options)
		.then((response) => {
			console.log(response);
			if (!response.ok) {
				throw new Error("Network response not ok");
			}
			return response.json();
		})
		.then((data) => {
			call(data);
		})
		.catch((err) => {
			console.error(err);
			resetAll();
		});
}

// -----------------------------------------------------------

fetchData(setWorldInfo, "", "worldStatus.json");
function setOnlineStatus(online) {
	if (online) {
		activeStatus.classList.remove("offline");
		activeStatus.classList.add("online");
		activeStatus.innerText = "Online";
	} else if (!online) {
		activeStatus.classList.remove("online");
		activeStatus.classList.add("offline");
		activeStatus.innerText = "Offline";
	}
}

// -----------------------------------------------------------

function setWorldInfo({ address, port, name, size, difficulty, evil }) {
	const serverAddress = (document.getElementById("address").innerText =
		address);
	const serverPort = (document.getElementById("port").innerText = port);
	const worldName = (document.getElementById("worldName").innerText = name);
	const worldSize = (document.getElementById("worldSize").innerText = size);
	const worldDiff = (document.getElementById("worldDiff").innerText =
		difficulty);
	const worldEvil = (document.getElementById("worldEvil").innerText = evil);
}

// -----------------------------------------------------------

const playingBtn = document.getElementById("playing");
playingBtn.addEventListener("click", () => {
	const ul = document.getElementById("players");
	ul.classList.toggle("hidden");
});
function setPlayers({ maxplayers, players }) {
	const numberOfPlayers = document.getElementById("numberOfPlayers");
	const playersOnline = document.getElementById("players");
	numberOfPlayers.innerText = `${players.length}/${maxplayers}`;
	playersOnline.innerHTML = players.map(({ nickname }) => {
		return `<li onclick="fetchData(readPlayer, '/v3/players/read?player=${nickname}&token=ilyzhanelle')">${nickname}</li>`;
	});
	setOnlineStatus(true);
}

// -----------------------------------------------------------

// function readPlayer(player) {
// 	console.log(player);
// }

// -----------------------------------------------------------

function setAll() {
	fetchData(
		setPlayers,
		"/v2/server/status?players=true&token=ilyzhanelle",
		"51.210.214.79:3118"
	);
}
function resetAll() {
	setOnlineStatus(false);
	// document.getElementById("players").innerHTML = "";
	document.getElementById("numberOfPlayers").innerText = "#";
}
setAll();
