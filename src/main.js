import Profile from './pages/profile.js'; 
import Login from './pages/login.js';
import renderAvatar from './pages/players.js';
import Message from './pages/message.js';

const main = document.querySelector('main');

const authCheck = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (location.hash === '#profile') {
        main.innerHTML = Profile();
      } else if (location.hash === '#players') {
        renderAvatar();
      } else if (location.hash === '#message') {
        main.innerHTML = Message();
        location.replace('#message')
      }
    } else {
      location.hash = '';
      main.innerHTML = Login();
    }
  });
};



window.addEventListener('load', authCheck);
window.addEventListener('hashchange', authCheck);
