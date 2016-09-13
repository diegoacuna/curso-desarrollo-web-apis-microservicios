'use strict';

/**
 * @ngdoc function
 * @name angularBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularBlogApp
 */
angular.module('angularBlogApp')
  .controller('MainCtrl', function ($scope, $resource) {

    $scope.nombre = "Diego";
    $scope.nombres = ["Juan", "Pedro", "Diego", "Maria"];

    //definimos nuestro recurso, este es un endpoint a los post de nuestra API
    var Post = $resource('http://localhost:3000/posts/:postId', {postId:'@id'});

    $scope.cambiarNombre = function(nombre) {
      $scope.nombre = nombre;
    };

    //cualquier codigo que pongamos directamente en el controlador sera ejecutado al iniciar la vista

    //la funcion query llama a '/posts' y trae todos los posts
    $scope.posts = Post.query();

  });
