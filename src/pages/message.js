import Button from '../components/button.js';
import textArea from '../components/text-area.js';
import logo from '../components/logo.js';
import actionIcon from '../components/action-icon.js';

const Message = () => {
	const template = `
	<nav role="navigation" class="navbar">
    The Match Game 
    ${actionIcon({
		class: 'signout-icon fas fa-sign-out-alt',
		name: 'sair',
		dataDocid: 'a',
		onClick: backTofeed,
		})}
  </nav>
	<form class='margin'>
		${logo({ img: 'image/avatar1.png', classImg: 'logo', classP: 'text-logo', text: 'Mensagens' })}
		<div id='mensagem'></div>
		${textArea({ class: 'add-post text-message', placeholder: 'Escreva sua mensagem', id: 'textAreaMessage' })}
		${Button({ type: 'button', title: 'Enviar', class: 'primary-button post-btn', onClick: newMessage })}
	</form>
		`
	mostrarMensagem();
	return template;
}

function backTofeed() {
	location.hash = '#players'
}

function mostrarMensagem() {
	const allMessages = firebase.firestore().collection('messages');
	allMessages.orderBy('timestamp', 'asc')
	.get().then(querySnaphot => {
		let messagelayout = "";
		querySnaphot.forEach((doc) => {
			messagelayout += `
			<li class='add-post posted-name'>
				<p>${doc.data().name}</p>
				<p>${doc.data().text}</p>
				<p>${doc.data().date}</p>
			</li>`
		});
		document.getElementById('mensagem').innerHTML = messagelayout;
	});
}

function newMessage() {
	const textArea = document.querySelector('.text-message');
	const message = {
		name: app.auth.currentUser.displayName,
		user: app.auth.currentUser.uid,
		text: textArea.value,
		timestamp: new Date().getTime(),
		date: new Date().toLocaleString('pt-BR').slice(0, 16),
	};
	firebase.firestore().collection('messages').add(message);

	textArea.value = '';
	window.message.mostrarMensagem();
}

window.message = {
	Message,
	mostrarMensagem,
}
// ${Button({ type: 'button', title: 'Voltar', class: 'primary-button post-btn', onClick: backTofeed })}

export default Message;