(function readyJS(win,doc){
    'use strict';
    let ajax=new XMLHttpRequest();
    ajax.open('GET','http://localhost:3000/usuario');
    ajax.onreadystatechange=function(){
        console.log(ajax.responseText);
    };
    ajax.send();
})(window,document);
