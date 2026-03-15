async function loadStats(){

let steamid = document.getElementById("steamid").value
let apikey = document.getElementById("apikey").value

let statsDiv = document.getElementById("stats")
statsDiv.innerHTML = "Loading..."

try{

let response = await fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${apikey}&steamid=${steamid}&include_appinfo=true&include_played_free_games=true`)

let data = await response.json()

let games = data.response.games

let totalGames = games.length

let totalMinutes = 0
let mostPlayed = null

let neverPlayed = 0

games.forEach(game => {

totalMinutes += game.playtime_forever

if(game.playtime_forever === 0){
neverPlayed++
}

if(!mostPlayed || game.playtime_forever > mostPlayed.playtime_forever){
mostPlayed = game
}

})

let totalHours = Math.round(totalMinutes/60)

statsDiv.innerHTML = `
<p>Total Games: ${totalGames}</p>
<p>Total Playtime: ${totalHours} hours</p>
<p>Most Played Game: ${mostPlayed.name}</p>
<p>Never Played Games: ${neverPlayed}</p>
`

}catch(e){

statsDiv.innerHTML = "Error loading stats (profile must be public)"

}

}
