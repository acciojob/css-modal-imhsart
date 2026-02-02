//your JS code here. If required.
let modal = document.querySelector('.modal')
let openBtn = document.querySelector('#openModal')
let closeBtn = document.querySelector('.close-modal')
let modcontent = document.querySelector('.modal-content')
openBtn.addEventListener('click', () => {
	modal.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
	modal.style.display = 'none';
})
modal.addEventListener('mousedown', (e) => {
	if(!modcontent.contains(e.target)){
		modal.style.display = 'none';
	}
})
