function newBadge() {
	var date = document.querySelectorAll('.date');
	var now = new Date;
	var badge = document.createElement('img');
	badge.src= "themes/bs3/images/new.gif";
	for(var i = 0; i < date.length; i++){
        // ie8 support 1999/01/01 but not 1999-01-01
		var then = new Date(date[i].innerText.trim().replace('-', '/'));
		var hours = (now - then) / 3600000;
		if(hours < 48){
			date[i].parentNode.appendChild(badge.cloneNode(true));
		}
	}
}

function boldTitle() {
	var tags = document.querySelectorAll('.tags');
	for(var i = 0; i < tags.length; i++){
		if(tags[i].innerText.indexOf('重要') !== -1){
			tags[i].previousElementSibling.setAttribute('class', 'font-weight-bold');
		}
	}
}

window.onload = function(){
  boldTitle();
  newBadge();
};
