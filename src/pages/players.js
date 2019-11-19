 import actionIcon from '../components/action-icon.js';
 import avatar from '../avatarDB.js';
 
let cardIndex = 0;

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
  
  <div id="menuToggle">
 
  <input type="checkbox" />
  
 
  <span></span>
  <span></span>
  <span></span>
  
 
  <ul id="menu">
    <a href="#"><li>Editar Perfil</li></a>
    <a href="#"><li>Promoções</li></a>
    <a href="#"><li>Meus Cupons</li></a>
    <a href="#"><li>Nossos Parceiros</li></a>
    <a href="#"><li>Sair</li></a>
  </ul>
</div>
${actionIcon({
  class: 'signout-icon fas fa-sign-out-alt',
  name: 'sair',
  dataDocid: 'a',
  onClick: logout,
})}

  The Match Game </nav>
  <section class="avatar">
        <div class="avatar-img" > 
          <img class="img" src="${avatar[cardIndex].url}">
          <p class="p-name">${avatar[cardIndex].name}</p>
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
  renderAvatar,
  db: firebase.firestore(),
  auth: firebase.auth(),
};

export default renderAvatar;
