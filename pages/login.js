
import Button from '../components/button.js';
import Input from '../components/input.js';
import logo from '../components/logo.js';
import Google from '../components/google-login.js';

const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).catch((erro) => {
    document.querySelector('.erro').textContent = erro.message;
  }).then(location.hash = '#feed');
};

const Login = () => {
  document.querySelector('body').classList = '';
  const template = `
    <section class='container main-container'>
    <section class="container">
      ${logo({
    img: 'image/logo.png', classImg: 'logo', classP: 'text-logo', text: 'MusicalSpace',
  })}
    </section>
      <section class="container">
        <form class="container">
        <p class="erro"></p>
        ${Google({
    src: 'image/google.png', class: 'google-button', onClick: loginGoogle, type: 'image',
  })}
       </section>
      </section>
      `;

  return template;
};
export default Login;
