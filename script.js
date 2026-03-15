async function loadProfile(){

const apiKey = document.getElementById("apikey").value
const steamid = document.getElementById("steamid").value
const profile = document.getElementById("profile")

profile.innerHTML = "Loading..."

try{

const proxy = "https://api.allorigins.win/get?url="

const url = encodeURIComponent(
`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${steamid}`
)

const res = await fetch(proxy + url)

const wrapped = await res.json()

const data = JSON.parse(wrapped.contents)

const player = data.response.players[0]

profile.innerHTML = `
<h2>${player.personaname}</h2>
<img src="${player.avatarfull}">
`

}catch(err){

console.error(err)
profile.innerHTML = "Erreur chargement profil"

}

}
