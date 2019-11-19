import Profile from './pages/profile.js'; 
import Login from './pages/login.js';
import Feed from './pages/feed.js';
import renderAvatar from './pages/feed.js';


const main = document.querySelector('main');

const authCheck = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      location.hash = '#feed';
      
    //   firebase.firestore().collection('posts')
    //     .where('private', '==', 'false')
    //     .orderBy('timestamp', 'desc')
    //     .onSnapshot((querySnapshot) => {
    //       main.innerHTML = Feed({ posts: querySnapshot });
    //     });
    // } 
    } else {
      location.hash = '';
    }
  });
};

const routes = () => {
  if (location.hash === '#profile') {
    main.innerHTML = Profile();
  } else if (location.hash === '') {
    main.innerHTML = Login();
  } else if (location.hash === '#feed') {
    authCheck();
  }
};


window.addEventListener('load', routes);
window.addEventListener('hashchange', routes);