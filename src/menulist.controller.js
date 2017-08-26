(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('MenuListController', MenuListController);

  MenuListController.$inject = ['MenuDataService'];
  function MenuListController(MenuDataService) {
    var menuList = this;
    menuList.items =[];

    menuList.$onInit = function () {
      MenuDataService.getAllCategories()
      .then(function (result){
        menuList.items = result.data;
      });
    };
  }
})();
