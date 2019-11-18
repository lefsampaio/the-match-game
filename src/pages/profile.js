import Button from '../components/button.js'; 
import Input from '../components/input.js';
import textArea from '../components/text-area.js';

const location = () => {
  location.hash = '';
};

const data = avatar

function buildHtml(data) {
  let html = "";
  data.forEach((obj) => html += `
  <img class="logo-avatar" src="${obj.url}" id="${obj.id}">`)
  return html
}
        

const Profile = () => {
  document.querySelector('body').className = '';
  const template = `
  <nav class="nav-bar"> The Match Game </nav>
  <section class='container main-container'>
    <section class="container">
    <h1 class="titulo-avatar">ESCOLHA SEU AVATAR</h1>
    <section>
     ${buildHtml(data)}
    </section>
    </section>
    <section class="container">
      <form class="container" id="register-form">      
        ${Input({ type: 'text',
                  placeholder: 'Nome', 
                  class: 'js-name-input primary-input'
                })}        
        ${textArea({
                  class: 'add-comment',
                  placeholder: 'Comente...',
                })}
        ${Button({type: 'submit',
                  title: 'Cadastrar',
                  class: 'primary-button',
                  onClick: '',
                })}
        ${Button({type: 'button', 
                  title: 'Voltar',
                  class: 'primary-button',
                  onClick: location, disabled: 'enabled',
                })}
      </form>
    </section>
  </section>
  `;
  return template;
};


// cardsGiphy.innerHTML = `<img class='gif-card'src="${giphyCards}">`;

// function newUser() {
//   const userName = document.querySelector('.js-name-input')
//   //const userImg = document.querySelector('.logo-avatar')
//   // const userGames = document.querySelector('')
//   const userProfile = { 
//     userName: userName.value, 
//     userImg: id.value,
//     userGames: [], 

//   };
//   firebase.firestore().collection('user-profile').add(userProfile);

// }







export default Profile;
