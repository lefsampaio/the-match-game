import actionIcon from '../components/action-icon.js';
import avatar from '../avatarDB.js';

let cardIndex = 0;
let gamesIndex= [];

const logout = () => {
  app.auth.signOut()
    .then(() => location.hash = '')
    .catch((error) => {
      `<p>${error}</p>`
    });
};

const renderAvatar = () => {
  const template = `
  <nav role="navigation" class="navbar">
  The Match Game 
  ${actionIcon({
    class: 'signout-icon fas fa-sign-out-alt',
    name: 'sair',
    dataDocid: 'a',
    onClick: logout,
  })}
  </nav>
  <section class="avatar">
        <div class="avatar-img" > 
          <img class="img" src="${avatar[cardIndex].url}">
          <p>${avatar[cardIndex].name}</p>
          <h4 class="p-class">Jogos favoritos</h4>
          <p class="p-class">${avatar[cardIndex].games[gamesIndex.length]}</p>
        </div>
        <div class="btn_swipe">
            <button><i class="fa fa-times"></i></button>
            <button><i class="fa fa-comments-o"></i></button>            
        </div>
    </section>`;
  document.querySelector('main').innerHTML =  template;


  const playerAvatar = document.querySelector('.avatar');
  const hammer = new Hammer(playerAvatar);

  hammer.on('swiperight', () => {
    document.querySelector('.avatar-img').classList.add('animated', 'rotateOutUpRight');
    document.querySelector('.avatar-img').addEventListener('animationend', () => location.replace('#message'));
  });
  
  hammer.on('swipeleft', () => {
    document.querySelector('.avatar-img').classList.add('animated', 'rotateOutUpLeft');
    document.querySelector('.avatar-img').addEventListener('animationend', () => {
      cardIndex++;
      renderAvatar();    
    });
  });
};

window.app = {
  db: firebase.firestore(),
  auth: firebase.auth(),
};

export default renderAvatar;
