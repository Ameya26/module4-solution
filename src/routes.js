(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RouteConfig);

  RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RouteConfig($stateProvider, $urlRouterProvider) {

    //Redirect to homepage if no url matches
    $urlRouterProvider.otherwise('/');

    // Set up UI states here
    $stateProvider

    // Home page
    .state('home', {
      url:'/',
      templateUrl: 'src/templates/home.template.html'
    })

    // categories
    .state('categories', {
      url:'/categories',
      templateUrl: 'src/templates/menu-categories.template.html',
      controller: 'MenuListController as menuList',
      resolve:{
        items:['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    //View Items for selected category
    .state('items', {
      url:'/items/{categoryShortName}',
      templateUrl:'src/templates/items.template.html',
      controller:'ItemsController as itemsMenu',
      resolve:{
        items: ['$stateParams', 'MenuDataService',
                function ($stateParams, MenuDataService) {
                  return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
      }
    });
  }
})();
