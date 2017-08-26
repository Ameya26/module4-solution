(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('MenuListController', MenuListController);

  MenuListController.$inject = ['items'];
  function MenuListController(items) {
    var menuList = this;
    menuList.items =items.data;
  }
})();
