app.controller('mainCtrl', function($scope, $routeParams, mainService) {
  $scope.test = "testing";
  $scope.getProduct = function() {
    $scope.getProduct = mainService.getProduct();
  };
})
