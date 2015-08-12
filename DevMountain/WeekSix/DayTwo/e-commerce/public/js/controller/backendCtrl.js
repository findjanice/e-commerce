app.controller('backendCtrl', function($scope, $routeParams, mainService) {

  $scope.deleteProduct = function(product) {
    mainService.deleteProduct(product);
  };

  $scope.postProduct = function(data) {
    console.log(data);
    mainService.postProduct(data);
  };


  //end controller
});
