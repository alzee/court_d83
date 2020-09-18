// 加入收藏 事件
;(function(){
    var d = document.getElementById('block-bs3-jiubanrukou');
    if (d) {
        var i = d.querySelector('li a');
        i.setAttribute('href', 'javascript:void(0)');
        i.onclick = addFavorite; // use onclick instead of addEventListenner due to ie8/9
    }
})();

function addFavorite() {
    window.external.AddFavorite(location.href, document.title);
}

// 复制 返回编辑状态 链接
;(function (){
    var i = document.getElementById('node-preview-form-select');
    if (i) {
        var a = document.getElementById('edit-backlink');
        var t = document.getElementById('block-bs3-page-title');
        document.querySelector('main').insertBefore(a.cloneNode(true), t);
    }
})();

;(function (){
    var i = document.getElementById('user-login-form');
    if(i){
    document.getElementById('edit-name').setAttribute('placeholder', "请输入账号");
    document.getElementById('edit-pass').setAttribute('placeholder', "请输入密码");
    }
})();
