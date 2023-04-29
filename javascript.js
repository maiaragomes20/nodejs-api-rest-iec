(function readyJS(win,doc){
const URL_TO_FETCH = 'http://localhost:3000/usuario';
fetch(URL_TO_FETCH, {
  method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({mes: result.data[][0], ano: result.data[0][] valor: result.data[3]})
})
.then((response) => {
    console.log(response);
  response.json()
  .then((result) => {
    console.log(result);
  })
})
.catch((err) => { 
  console.error(err);
});
})(window,document);


/*const URL_TO_FETCH = 'http://localhost:3000/rs/2/2018';
fetch(URL_TO_FETCH, {
  method: 'get' // opcional
})
.then((response) => {
  response.json()
  .then((result) => {
    console.log(result);
  })
})
.catch((err) => { 
  console.error(err);
});*/

/*(function readyJS(win,doc){
    'use strict';
    let ajax=new XMLHttpRequest();
    ajax.open('GET','http://localhost:3000/rs');
    ajax.onreadystatechange=function(){
        console.log(ajax.responseText);
        alert(ajax.responseText);
    };
    ajax.send();
})(window,document);*/
