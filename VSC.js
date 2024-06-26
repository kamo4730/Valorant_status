let apiKey = 'RGAPI-a6ca8c3a-0cfc-4d2a-9897-de8d993cda95'

async function getLeaderboard() {
    try {
        const a = document.getElementById("optionList");
        const seasonId = a.value;
        const url = `https://kr.api.riotgames.com/val/ranked/v1/leaderboards/by-act/${seasonId}?size=100&startIndex=0&api_key=${apiKey}`;

        const response = await axios.get(url);
        const leaderboardData = response.data.players;

        const tableBody = document.getElementById('leaderboard-table-body');
        tableBody.innerHTML = '';

        leaderboardData.forEach((player, index) => {
            const row = document.createElement('tr');

            const rankCell = document.createElement('td');
            rankCell.textContent = index + 1;
            row.appendChild(rankCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = player.gameName;
            row.appendChild(nameCell);

            const scoreCell = document.createElement('td');
            scoreCell.textContent = player.leaderboardRank;
            row.appendChild(scoreCell);

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.log(error);
    }
}


