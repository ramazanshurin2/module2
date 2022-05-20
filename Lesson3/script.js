'use strict';

const isEmpty = str => {
    if (str.trim() == '')
    return true;
    return false;
}

const body = document.querySelector('body');
body.innerHTML += "<ul></ul>"
const ul = document.querySelector('ul');
var stop = false;
while (stop == false){
    const str = prompt('Введите строку!');
    if (str == null || str == "exit") {
        stop = true;
      }
      else {
          if (str == "del"){
              const lis = ul.querySelectorAll('li');
              const last = lis.length - 1;
              lis[last].remove();
          }
          else if (str == "clear") {
                ul.innerHTML = "";
          }
          else if (isEmpty(str)){

          }
          else {
                ul.innerHTML += "<li>" + str +"</li>";
          }
      }
    
}

