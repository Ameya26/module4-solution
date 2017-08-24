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
      template: '<div>In the home route </div>'
    })

    // categories
    .state('categories', {
      url:'/categories',
      template: '<div>Inside the categories</div>'
    });
    
  }
})();
