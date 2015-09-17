var app = angular.module('myApp',  ['ui.router', 'templates', 'xeditable']); 

// angular.module('myApp',  ['ui.router', 'templates'])

app.config([
  '$stateProvider'
  , '$urlRouterProvider'
  , function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state( 'home', {
        url: '/home'
        , templateUrl: '../templates/home/_home.html'
        , controller: 'MainCtrl'
      })  
    .state('posts', {
      url: '/posts/{id}'
      , templateUrl: '../templates/posts/_posts.html'
      , controller: 'postsCtrl'
      , resolve: {
        postPromise: ['posts', function(posts){
          return posts.getAll(); 
        }]
      }


    }); 

    $urlRouterProvider.otherwise('home') ;
  }])
 

