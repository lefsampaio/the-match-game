import logo from '../components/logo.js';
import Input from '../components/input.js';
import Button from '../components/button.js';


function enviarCadastro() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      if (user) {
        window.location.hash = '#profile';
      }
    });
}

function enviarLogin() {
  const email = document.querySelector('.js-email-input').value;
  const password = document.querySelector('.js-password-input').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      if (user) {
        window.location.hash = '#players';
      }
    });
}

const Login = () => {
  document.querySelector('body').classList = '';
  const template = `
    <section class='container main-container'>
    <section class="container">
      ${logo({
    img: 'image/logo_matchgame.png', classImg: 'logo', classP: 'text-logo', text: 'The Match Game',
  })}
    </section>
      <section class="container">
      ${Input({ type: 'email', placeholder: 'Email', class: 'js-email-input primary-input' })}
      ${Input({ type: 'password', placeholder: 'Senha', class: 'js-password-input primary-input' })}
      ${Button({
        type: 'submit', title: 'Login', class: 'primary-button', onClick: enviarLogin, disabled: 'enabled',
      })}
      ${Button({
        type: 'submit', title: 'Cadastrar', class: 'primary-button', onClick: enviarCadastro, disabled: 'enabled',
      })}
       </section>
      </section>
      `;

  return template;
};
export default Login;
