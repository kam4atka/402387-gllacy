var noJs = document.querySelector('html');
noJs.classList.remove('no-js');

/* Navigation block */

var activeMenu = document.querySelector('.site-menu-open');
var subMenuWrapper = document.querySelector('.site-submenu-wrapper');

function menuHendler(evt) {
	evt.preventDefault();
	subMenuWrapper.classList.toggle('hide');
}

if (activeMenu) {
	activeMenu.addEventListener('click', menuHendler);
}

/* Search block */

var searchLink = document.querySelector('.header-search-link');
var searchWrapper = document.querySelector('.header-search-wrapper');

function searchLinkHendler(evt) {
	evt.preventDefault();
	searchWrapper.classList.toggle('hide');
}

if (searchLink) {
	searchLink.addEventListener('click', searchLinkHendler);
}

/* Login block */

var loginLink = document.querySelector('.header-login-link');
var loginWrapper = document.querySelector('.header-login-wrapper');

function loginLinkHendler(evt) {
	evt.preventDefault();
	loginWrapper.classList.toggle('hide');
}

if (loginLink) {
	loginLink.addEventListener('click', loginLinkHendler);
}

/* Card block */

var cardLink = document.querySelector('.header-card-link');
var cardWrapper = document.querySelector('.header-card-wrapper');

function cardLinkHendler(evt) {
	evt.preventDefault();
	cardWrapper.classList.toggle('hide');
}

if (cardLink) {
	cardLink.addEventListener('click', cardLinkHendler);
}

/* Feedback block */

var writeUs = document.querySelector('.legend-contact');
var writeUsModal = document.querySelector('.writeus')
var modalOverlay = document.querySelector('.modal-overlay');

function setCloseEvent(root) {
	var modalClose = root.querySelector('.modal-close');
	modalClose.addEventListener('click', function(evt) {
		evt.preventDefault();
		root.classList.add('hide');
		modalOverlay.classList.add('hide');
	});
	modalOverlay.addEventListener('click', function() {
		root.classList.add('hide');
		modalOverlay.classList.add('hide');
	});
}

function setCloseEsc(root) {
	window.addEventListener('keydown', function(evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (!root.classList.contains('hide')) {
				root.classList.add('hide');
				modalOverlay.classList.add('hide');
			}
		}
 	});
}

function writeUsHendler(evt) {
	evt.preventDefault();
	writeUsModal.classList.remove('hide');
	modalOverlay.classList.remove('hide');
	setCloseEvent(writeUsModal);
	setCloseEsc(writeUsModal);
}

if (writeUs) {
	writeUs.addEventListener('click', writeUsHendler);
}