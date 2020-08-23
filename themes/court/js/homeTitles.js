function newBadge() {
	var date = document.getElementsByClassName('date');
	var now = new Date;
	var badge = document.createElement('img');
	badge.src= "themes/court/images/new.gif";
	for(var i = 0; i < date.length; i++){
		var then = new Date(date[i].innerText.trim().replace('+0800', ''));
		var hours = (now - then) / 3600000;
		if(hours < 48){
			date[i].parentNode.appendChild(badge.cloneNode(true));
		}
	}
}

function boldTitle() {
	var tags = document.getElementsByClassName('tags');
	for(var i = 0; i < tags.length; i++){
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
