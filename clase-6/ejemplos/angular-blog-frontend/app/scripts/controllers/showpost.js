'use strict';

/**
 * @ngdoc function
 * @name angularBlogApp.controller:ShowpostCtrl
 * @description
 * # ShowpostCtrl
 * Controller of the angularBlogApp
 */
angular.module('angularBlogApp')
  .controller('ShowPostCtrl', function ($scope, $resource, $routeParams) {

    var Post = $resource('http://localhost:3000/posts/:postId', {postId:'@id'});

    Post.get({postId: $routeParams.post_id}, function(post) {
      $scope.post = post;
    });

  });
