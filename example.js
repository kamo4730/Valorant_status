
const apiKey = 'RGAPI-159257b3-b183-4712-84b6-d7927c0423b7';

let url = `https://kr.api.riotgames.com/val/ranked/v1/leaderboards/by-act/${seasonId}?size=100&startIndex=0&api_key=RGAPI-159257b3-b183-4712-84b6-d7927c0423b7`;

var a = document.getElementById("optionList")
var seasonId = a.seasonId


async function getLeaderboard() {
    try {
        const response = await axios.get(url);

        document.getElementById('output').innerHTML = response;
    } catch (error) {
        console.log(error);
    }
}
