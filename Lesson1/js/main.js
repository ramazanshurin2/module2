'use strict'

const items = document.querySelector('.items');

const item = document.querySelectorAll('.item');

const item_one = document.querySelector('.item_one');
const item_two = document.querySelector('.item_two');
const item_three = document.querySelector('.item_three');
const item_four = document.querySelector('.item_four');
const item_five = document.querySelector('.item_five');
const item_six = document.querySelector('.item_six');


const list_two = item_two.querySelectorAll('.props__item');
const list_three = item_three.querySelectorAll('.props__item_five');
const list_four = item_four.querySelectorAll('.props__item');
const list_five = item_five.querySelectorAll('.props__item_three');
const list_six = item_six.querySelectorAll('.props__item');

items.append(item_one);
items.append(item_two);
items.append(item_three);
items.append(item_four);
items.append(item_five);
items.append(item_six);
list_four[2].after(list_two[3]);

for (var i = 0; i < list_five.length; i++){
    list_three[0].before(list_five[i]);
}

const prompt_five = item_five.querySelector('.props__list');
for (var i = 0; i < list_three.length; i++){
    prompt_five.append(list_three[i]);
}

console.log('list two' , list_two);
list_two[8].after(list_six[9]);
list_two[8].after(list_six[8]);