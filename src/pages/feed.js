// import Button from '../components/button.js';
// import actionIcon from '../components/action-icon.js';

const playerAvatar = document.querySelector('.avatar');
const hammer = new Hammer(playerAvatar);

const getPlayerAvatar = () => {
  fetch('https://api.giphy.com/v1/gifs/random?api_key=kzrp61DouoQLunyHqor9U9Ih5sEAWqxo&tag=&rating=G')
    .then(response => response.json())
    .then((data) => {
      let avatarCards = data.data.images.fixed_height.url
      renderAvatar(avatarCards)
    });
};
const logout = (e) => {
  app.auth.signOut().catch((error) => {
    `<p>${error}</p>`
  });
};

/* <button class="btn-menu"><i class="fa fa-bars"></i></button> */
// ${actionIcon({
//   class: 'signout-icon fas fa-sign-out-alt',
//   name: 'sair',
//   dataDocid: 'a',
//   onClick: logout,
// })}

const renderAvatar = (playerAvatar) => {
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


  The Match Game </nav>
  
        <div class="avatar-img" > <img class="img" src="${playerAvatar}">
       
        </div>
        <div class="btn_swipe">
            <button><i class="fa fa-times"></i></button>
            <button><i class="fa fa-comments-o"></i></button>            
        </div>`;
  document.querySelector('.avatar').innerHTML = template;
};

const test = () => {
  console.log('enviando msg')
};

hammer.on('swiperight', () => {
  document.querySelector('.avatar-img').classList.add('animated', 'rotateOutUpRight');
  document.querySelector('.avatar-img').addEventListener('animationend', getPlayerAvatar);
  test();
});

hammer.on('swipeleft', () => {
  document.querySelector('.avatar-img').classList.add('animated', 'rotateOutUpLeft');
  document.querySelector('.avatar-img').addEventListener('animationend', getPlayerAvatar);
});

getPlayerAvatar();
window.app = {
  // postsTemplate: '',
  renderAvatar,
  db: firebase.firestore(),
  auth: firebase.auth(),
};

export default renderAvatar;

// const deletePost = (deleteButton) => {
//   const confirmDelete = confirm('Deseja mesmo deletar?');
//   if (confirmDelete) {
//     app.db.collection('posts').doc(deleteButton.dataset.docid).delete().then(() => {
//       deleteButton.parentElement.parentElement.remove();
//     });
//   }
// };


// const makePostEditable = (pencilIcon) => {
//   pencilIcon.className = 'edit-btn minibtns hide';
//   pencilIcon.previousElementSibling.className = 'save-btn minibtns show fas fa-check';
//   pencilIcon.parentElement.previousElementSibling.contentEditable = true;
//   pencilIcon.parentElement.previousElementSibling.className += ' editable-text';
// };

// const saveEditPost = (checkIcon) => {
//   checkIcon.className = 'save-btn minibtns hide fas fa-check';
//   checkIcon.nextElementSibling.className = 'edit-btn minibtns show';
//   const pText = checkIcon.parentElement.previousElementSibling;
//   const id = checkIcon.dataset.docid;
//   const db = firebase.firestore();
//   pText.contentEditable = false;
//   pText.className = 'text';
//   db.collection('posts').doc(id).update({
//     text: pText.textContent,
//     date: new Date().toLocaleString('pt-BR').slice(0, 16),
//   });
// };

// const like = (heart) => {
//   const newlike = Number(heart.nextElementSibling.textContent) + 1;
//   app.db.collection('posts').doc(heart.dataset.docid)
//     .update({
//       likes: newlike,
//     });
// };

// const checkUserEdit = (doc) => {
//   const user = app.auth.currentUser.uid;
//   if (user === doc.user) {
//     return `
//     ${actionIcon({
//     class: 'save-btn minibtns hide fas fa-check',
//     name: doc.user,
//     dataDocid: doc.id,
//     onClick: saveEditPost,
//   })}
//       ${actionIcon({
//     class: 'edit-btn minibtns fas fa-pencil-alt',
//     name: doc.user,
//     dataDocid: doc.id,
//     onClick: makePostEditable,
//   })}
//     `;
//   }
//   return '';
// };

// const checkUserDelete = (doc) => {
//   const user = app.auth.currentUser.uid;
//   if (user === doc.user) {
//     return `
//   ${actionIcon({
//     class: 'delete-btn minibtns fas fa-times',
//     name: doc.user,
//     dataDocid: doc.id,
//     onClick: deletePost,
//   })}`;
//   }
//   return '';
// };

// const addComment = (commentIcon) => {
//   commentIcon.parentElement.nextElementSibling.classList.toggle('hide');
// };

// const saveComment = (event) => {
//   if (event.keyCode === 13) {
//     const comment = event.target.value;
//     const name = app.auth.currentUser.displayName;
//     const id = event.target.parentElement.dataset.docid;

//     app.db.collection('posts').doc(id).update({
//       commentsCount: firebase.firestore.FieldValue.increment(1),
//       comments: firebase.firestore.FieldValue.arrayUnion({ comment, name }),
//     });
//   }
// };

// const checkComments = (comments) => {
//   if (comments) {
//     const commentsTemplate = [];
//     comments.forEach((obj) => {
//       commentsTemplate.push(`<p class="text comment-area">
//       <span class="comment-name">${obj.name}</span><br>${obj.comment}
//     </p>
//   `);
//     });
//     const finalCommentsTemplate = `
//     <div class="comments-title">
//       <p class="branco">Comentários:</p>
//       ${commentsTemplate.join('')}
//     </div>`;
//     return finalCommentsTemplate;
//   }
//   return '';
// };

// const postTemplate = doc => `
//     <div class='column posted container-post' data-id=${doc.id}> 
//       <p class='row posted posted-name'> Publicado por ${doc.name} | ${doc.date}
//       ${checkUserDelete(doc)}
//       </p>

//     <div class='row text-button'>
//       <p class='text' data-like=${doc.likes} data-docid=${doc.id}> ${doc.text}</p>
//       <div class='buttons'>
//       ${checkUserEdit(doc)}
//       </div>
//     </div>

//       <div>
//       ${checkComments(doc.comments)}
//       </div>

//       <div class='column comments' data-docid=${doc.id}>
//         <div>
//         ${actionIcon({
//     class: 'comment-btn minibtns fab far fa-paper-plane',
//     name: doc.user,
//     dataDocid: doc.id,
//     onClick: addComment,
//   })}
//       <span class="likes">${doc.commentsCount}</span>
//         ${actionIcon({
//     class: 'like-btn minibtns fas fa-heart',
//     name: doc.user,
//     dataDocid: doc.id,
//     onClick: like,
//   })}
//     <span class="likes">${doc.likes}</span>
//         </div>
//       ${textArea({
//     class: 'add-comment hide',
//     placeholder: 'Comente...',
//     onKeyup: saveComment,
//   })}

//       </div>
//     </div>`;


// const newPost = () => {
//   const textArea = document.querySelector('.add-post');
//   const privacyOption = document.querySelector('.privacy-option');
//   const post = {
//     name: app.auth.currentUser.displayName,
//     user: app.auth.currentUser.uid,
//     text: textArea.value,
//     likes: 0,
//     commentsCount: 0,
//     timestamp: new Date().getTime(),
//     date: new Date().toLocaleString('pt-BR').slice(0, 16),
//     private: privacyOption.value,
//   };
//   app.db.collection('posts').add(post).then((docRef) => {
//     docRef = {
//       ...post,
//       id: docRef.id,
//     };

//     textArea.value = '';
//     document.querySelector('.post-btn').disabled = true;
//   });
// };

// const buttonActivate = (e) => {
//   const postBtn = document.querySelector('.post-btn');
//   const chars = e.target.value.length;
//   if (chars !== 0) {
//     postBtn.disabled = false;
//   } else {
//     postBtn.disabled = true;
//   }
// };

// const Feed = (props) => {
//   app.postsTemplate = '';
//   document.querySelector('body').className = 'background';

//   props.posts.forEach((post) => {
//     const docPost = {
//       ...post.data(),
//       id: post.id,
//     };
//     app.postsTemplate += app.postTemplate(docPost);
//   });

//   const template = `
//   <header class='header'> <h2 class='header-title'> MusicalSpace </h2>
//   ${actionIcon({
//     class: 'signout-icon fas fa-sign-out-alt',
//     name: 'sair',
//     dataDocid: 'a',
//     onClick: logout,
//   })}
//   </header>
//     <section class="container-main screen-margin-bottom">
//       ${Profile()}
//       <section class="container margin-top-container">
//       <div class='column new-post'>
//       ${textArea({
//     class: 'add-post',
//     placeholder: 'O que você está ouvindo?',
//     onKeyup: buttonActivate,
//   })}
//   <div class='row'>
//     ${selectPrivacy({
//     class: 'privacy-option',
//     onChange: null,
//     opClass1: 'public',
//     value1: 'false',
//     txt1: 'Público',
//     opClass2: 'private',
//     value2: 'true',
//     txt2: 'Privado',
//   })}

//   ${Button({
//     type: 'button',
//     title: 'Postar',
//     class: 'primary-button post-btn',
//     onClick: newPost,
//     disabled: 'disabled',
//   })}
//   </div>
//       </div>
//       <p class="privacy-text">
//       Visualizar Posts:
//       </p>
//       ${selectPrivacy({
//     class: 'privacy-option',
//     onChange: changeViewPost,
//     opClass1: 'public',
//     value1: 'false',
//     txt1: 'Público',
//     opClass2: 'private',
//     value2: 'true',
//     txt2: 'Privado',
//   })}
//         <div class='container posts'> ${app.postsTemplate} </div>
//       </section>
//     </section>
//   `;
//   return template;
// };

// const changeViewPost = (e) => {
//   document.querySelector('.posts').innerHTML = '';
//   const value = e.target.value;
//   if (value == 'false') {
//     firebase.firestore().collection('posts')
//       .where('private', '==', value)
//       .orderBy('timestamp', 'desc')
//       .get()
//       .then((querySnapshot) => {
//         querySnapshot.forEach((post) => {
//           const docPost = {
//             ...post.data(),
//             id: post.id,
//           };
//           document.querySelector('.posts').innerHTML += app.postTemplate(docPost);
//         });
//       });
//   } else {
//     const currentUser = app.auth.currentUser.uid;
//     firebase.firestore().collection('posts')
//       .where('user', '==', currentUser)
//       .where('private', '==', value)
//       .orderBy('timestamp', 'desc')
//       .get()
//       .then((querySnapshot) => {
//         querySnapshot.forEach((post) => {
//           const docPost = {
//             ...post.data(),
//             id: post.id,
//           };
//           document.querySelector('.posts').innerHTML += app.postTemplate(docPost);
//         });
//       });
//   }
// };

// const Profile = () => {
//   const username = app.auth.currentUser;
//   const user = app.auth.currentUser.uid;
//   const name = username.displayName.trim();


//   const templateProfile = `<div class="photo-profile">
//       <div class="cover">
//       <img class="cover"src="../image/cover.png"/>
//       </div>
//       <div class="profile">
//       <i class="far fa-user user-icon"></i>
//           <h1 class="user-info">${name}</h1>
//           ${actionIcon({
//     class: 'edit-btn minibtns fas fa-pencil-alt',
//     name: user.user,
//     dataDocid: user.id,
//     onClick: editProfile,
//   })}      
//           ${actionIcon({
//     class: 'save-btn minibtns hide fas fa-check',
//     name: user.user,
//     dataDocid: user.id,
//     onClick: updateProfile,
//   })}   


//      </div> 
//    </div> 
//       `;
//   return templateProfile;
// };

// const editProfile = (pencilIcon) => {
//   pencilIcon.className = 'edit-btn minibtns hide';
//   pencilIcon.nextElementSibling.className = 'save-btn minibtns show fas fa-check';
//   pencilIcon.previousElementSibling.contentEditable = true;
//   pencilIcon.previousElementSibling.className += 'editable-text';
// };

// const updateProfile = (checkIcon) => {
//   checkIcon.className = 'save-btn minibtns hide fas fa-check';
//   checkIcon.className = 'edit-btn minibtns show';
//   const pName = checkIcon.parentElement;
//   pName.contentEditable = false;
//   pName.className = 'username';

//   const user = app.auth.currentUser;
//   user.updateProfile({
//     displayName: pName.textContent,
//     name: pName.textContent,
//   });

//   app.db.collection('posts').where('user', '==', user.uid)
//     .get()

//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         app.db.collection('posts').doc(doc.id).update({ name: pName.textContent });
//       });
//     });
// };


// window.app = {
//   // postsTemplate: '',
//   // postTemplate,
//   db: firebase.firestore(),
//   auth: firebase.auth(),
// };
// // window.changeViewPost = changeViewPost;

// export default Feed;
