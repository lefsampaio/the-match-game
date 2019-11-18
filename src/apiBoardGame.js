const getNameGame = () => {
  fetch(
    "https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=SB1VGnDv7M "
  )
    .then(response => response.json())
    .then(data => {
      const nameGames = data.games.map(game=>
        game.name);
    console.log(nameGames);
     
    return nameGames
      
    });
    
};

const getLinkGame = () => {
    fetch(
      "https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=SB1VGnDv7M "
    )
      .then(response => response.json())
      .then(data => {
        const linkGames = data.games.map(game=>
          game.url);
      console.log(linkGames);
       
      return linkGames
        
      });
      
  };

getNameGame();
getLinkGame();

// cardsGiphy.innerHTML = `<img class='gif-card'src="${giphyCards}">`;
