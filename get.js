const apiKey = 'RGAPI-daf1fe0b-0c79-497d-9605-f3c0660d3f48';
const seasonId = 'EP5_ACT3'
const size = 100
const startIndex = 0

let url = `https://kr.api.riotgames.com/val/ranked/v1/leaderboards/by-act/${seasonId}?size=${size}&startIndex=${startIndex}&api_key=${apiKey}`

