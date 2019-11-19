import Button from '../components/button.js'; 
import Input from '../components/input.js';
import avatar from '../avatarDB.js';

const logout = () => {
  app.auth.signOut()
    .then(() => location.hash = '')
    .catch((error) => {
      `<p>${error}</p>`
    });
};

const data = avatar

function buildHtml(data) {
  let html = "";
  data.forEach((obj) => html += `
  <button onclick='clickDoAvatar(event)' class="btn-avt"><img class="logo-avatar" src="${obj.url}" id="${obj.id}"></button>`)
  return html
}

window.clickDoAvatar = function clickDoAvatar(event) {
  window.userData.avatarId = event.target.id;
  window.userData.avatarUrl = event.target.src;
}

const Profile = () => {
 
  document.querySelector('body').className = '';
  const template = `
  <nav class="nav-bar"> 
   <strong>The Match Game
   ${Button({
    type: "button",
    title: "Voltar",
    class: "primary-button btn-voltar",
    onClick: logout,
    disabled: "enabled"
  })}
  </nav>
  <section class='container main-container'>
    <section class="container">
    <h1 class="titulo-avatar">ESCOLHA SEU AVATAR</h1>
    <section class="escolha-avatar">
     ${buildHtml(data)}
    </section>
    </section>
    <section class="container">
      <form class="container" id="register-form">      
        ${Input({
          type: "text",
          placeholder: "Nome",
          class: "js-name-input primary-input"
        })}
        <select id='meu-select'>
        </select>
        ${Button({
          type: "submit",
          title: "Cadastrar",
          class: "primary-button",
          onClick: newUser
        })}

      </form>
    </section>
  </section>
  `;
  createGame()
  return template;
};

function createGame() {
  fetch(
    "https://www.boardgameatlas.com/api/search?order_by=popularity&ascending=false&client_id=SB1VGnDv7M&limit=50"
  )
    .then(response => response.json())
    .then(data => {
      document.querySelector('#meu-select').innerHTML = data.games.map(game => `<option value=${game.name}>${game.name}</option>`).join('');
    })
}

function newUser() {
  const userName = document.querySelector('.js-name-input').value;
  userData.name = userName;
  const userGames = document.querySelector('#meu-select').value;
  userData.game = userGames;
  firebase.firestore().collection('user-profile').add(userData)
  .then(() => {
  userName.value = '';
  location.replace('#players')
})

}


window.userData = {
  avatarId: null,
  avatarUrl: null,
  name: null,
  game: null
}




export default Profile
