(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var itemsMenu = this;
    itemsMenu.items = items.data.menu_items;
  }
})();
