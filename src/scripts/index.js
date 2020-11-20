import $ from 'jquery';
import shoppingList from './shopping-list';
import store from './store';
import '../styles/index.css';
import item from './item.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
  console.log(store);
};

$(main);
