let apiKey = 'RGAPI-8efc71be-7e64-401a-bd8a-6d704b607ecb';

const a = document.getElementById("optionList");
const seasonId = a.value;
var requestURL = `https://kr.api.riotgames.com/val/ranked/v1/leaderboards/by-act/${seasonId}?size=100&startIndex=0&api_key=${apiKey}`;

var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
    var playerz = request.response;
    populateHeader(playerz);
    showplayerz(playerz);
};
function populateHeader(jsonObj) {
    var myPlayerz = document.createElement("p")
    myPlayerz.textContent =
    '#'+jsonObj[leaderboardRank]/njsonObj[gameName]+'#'+jsonObj[tagLine]/n (jsonObj[competitiveRank]);
    
}

function valtier(num) {
    JSON.parse(num)
    if (num == 24) {
        return '레디언트'
    }
    else if (num == 21) {
        return '불멸'
    }
    else {
        return 'unknown'
    }
}