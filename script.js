async function loadProfile(){

let steamid = document.getElementById("steamid").value
let apikey = document.getElementById("apikey").value
let profile = document.getElementById("profile")

profile.innerHTML = "Loading..."

try{

let url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apikey}&steamids=${steamid}`

// proxy CORS
let response = await fetch(
    "https://corsproxy.io/?" + encodeURIComponent(url)
)

let data = await response.json()

let player = data.response.players[0]

profile.innerHTML = `
<h2>${player.personaname}</h2>
<img src="${player.avatarfull}">
`

}catch(err){

profile.innerHTML = "Error loading profile"
console.error(err)

}

}
