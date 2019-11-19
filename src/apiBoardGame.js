const getNameGame = () => {
  fetch(
    "https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=SB1VGnDv7M "
  )
    .then(response => response.json())
    .then(data => {
      const nameGames = data.games.map(game=>
        game.name);
      const linkGames = data.games.map(game=>
        game.url);  
      console.log(nameGames, linkGames);
      return nameGames, linkGames
      
    })

}
getNameGame()
 
export default getNameGame 

// cardsGiphy.innerHTML = `<img class='js-game-name'src="${nameGames}">`;
