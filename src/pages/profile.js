import Button from '../components/button.js'; 
import Input from '../components/input.js';
import textArea from '../components/text-area.js';
import getNameGame from '../apiBoardGame.js'; 

const location = () => {
  location.hash = '';
};

const data = avatar

function buildHtml(data) {
  let html = "";
  data.forEach((obj) => html += `
  <img class="logo-avatar" src="${obj.url}" id="${obj.id}" ${Button(chooseAvatar)}>`)
  return html
}


const Profile = () => {
  document.querySelector('body').className = '';
  const template = `
  <nav class="nav-bar"> 
   <strong>The Match Game
   ${Button({
    type: "button",
    title: "Voltar",
    class: "primary-button",
    onClick: location,
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
        ${Input({
          type: "text",
          placeholder: "Escolha seus 5 jogos favoritos",
          class: "js-game-name primary-input"
        })}
        ${Button({
          type: "submit",
          title: "+",
          class: "btn-add",
          onClick: chooseGame
        })}
        ${textArea({
          class: "add-comment list-games",
          placeholder: "Cinco jogos favoritos..."
        })}
        ${Button({
          type: "submit",
          title: "Cadastrar",
          class: "primary-button",
          onClick: "newUser"
        })}

      </form>
    </section>
  </section>
  `;
  return template;
};


// nameGames.forEach(item => {
//   addOption(item)
// })

function chooseGame() {
 
    const test = document.querySelector('.js-game-name');
    const option = document.createElement('p');
    const area = document.querySelector('.add-comment');
    option.text = "";
    area.add(test);
};


function chooseAvatar() {
//   const avatar = document.querySelector('.js-game-name').value; 
  
}; 

chooseAvatar()

function newUser() {
  const userName = document.querySelector('.js-name-input')
  const userImg = document.querySelector('.logo-avatar')
  const userGames = document.querySelector('.list-games')
  firebase.firestore().collection('user-profile').add(userProfile)
  .then(() => {
  userName.value = '';
  userImg.value = '';
  userGames.value = '';
})
}




export default Profile
