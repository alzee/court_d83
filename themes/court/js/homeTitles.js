function newBadge() {
	let date = document.getElementsByClassName('date');
	let now = new Date;
	let badge = document.createElement('img');
	badge.src= "themes/court/images/new.gif";
	for(let i = 0; i < date.length; i++){
		let then = new Date(date[i].innerText.trim().replace('+0800', ''));
		let hours = (now - then) / 3600000;
		if(hours < 48){
			date[i].parentNode.appendChild(badge.cloneNode(true));
		}
	}
}

function boldTitle() {
	let tags = document.getElementsByClassName('tags');
	for(let i = 0; i < tags.length; i++){
		if(tags[i].innerText.indexOf('重要') !== -1){
			tags[i].previousElementSibling.classList.add('font-weight-bold');
		}
	}
}

window.onload = function(){
  boldTitle();
  newBadge();
  initSwiper();
};
