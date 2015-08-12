app.controller('mainCtrl', function($scope, $routeParams, mainService) {
  $scope.test = "testing one,two";

  $scope.getProduct = function() {
    mainService.getProduct().then(function(response) {
      console.log('this is in the controller', response);
      $scope.products = response.data;
      console.log($scope.products);

    });
  };

  $scope.getProduct();

  //end controller
})
