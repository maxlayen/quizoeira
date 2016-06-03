angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('inicio', {
    url: '/page1',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('ajuda', {
    url: '/page2',
    templateUrl: 'templates/ajuda.html',
    controller: 'ajudaCtrl'
  })

  .state('questoes', {
    url: '/questoes',
    templateUrl: 'templates/questoes.html',
    controller: 'questoesCtrl'
  })

  .state('fimDeJOGO', {
    url: '/fimDeJOGO',
    templateUrl: 'templates/fimDeJogo.html',
    controller: 'fimDeJOGOCtrl'
  })


$urlRouterProvider.otherwise('/page1')



});
