import logo from '../components/logo.js';
import Google from '../components/google-login.js';

const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).catch((erro) => {
    console.log(erro)
  }).then(location.hash = '#feed');
};

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
        <p class="login-text">Entre com sua conta Google</p>
        ${Google({
    src: 'image/google.png', class: 'google-button', onClick: loginGoogle, type: 'image',
  })}
       </section>
      </section>
      `;

  return template;
};
export default Login;
