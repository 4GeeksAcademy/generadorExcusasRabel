let who = ['El perro','Mi abuela','Mi tortuga','Mi canario', 'Mi gato'];
let what = ['se comió','aplastó','robó','rompió', 'ensució'];
let when = ['antes de clases','justo cuando terminé','mientras almorzaba','mientras yo rezaba'];

function excuseGenerator(quien, que, cuando){
   let numQuien = Math.floor(Math.random() * quien.length);
   let numQue = Math.floor(Math.random() * que.length);
   let numCuando = Math.floor(Math.random() * cuando.length);

    return quien[numQuien] + " " + que[numQue] + " " + "mi tarea" + " " + cuando[numCuando];
}
function onLoad(){
    let excusa = document.getElementById('excuse');
    excusa.innerHTML = excuseGenerator(who, what, when);
}
window.onload = onLoad;
