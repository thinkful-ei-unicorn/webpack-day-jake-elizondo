import item from './item.js';
import store from './store.js';

const items = [];
const hideCheckedItems = false;

const findById = function (id) {
  let targetItem = this.items.find((item) => item.id === id);

  return targetItem;
};

const addItem = function (itemName) {
  try {
    item.validateName(itemName);

    store.items.push(item.create(itemName));
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }
};

const findAndToggleChecked = function (id) {
  let targetItem = this.findById(id);
  targetItem.checked = !targetItem.checked;
};

const findAndUpdateName = function (id, newName) {
  try {
    item.validateName(newName);

    let targetItem = this.findById(id);
    targetItem.name = newName;
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }
};

const findAndDelete = function (id) {
  const index = store.items.findIndex((item) => item.id === id);
  store.items.splice(index, 1);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter,
};
