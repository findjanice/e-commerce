app.service('mainService', function($http, $q) {

  this.getProduct = function() {
    $http({
      url: 'api/shops',
      dataType: 'JSON',
      method: 'GET'
    })
  }
})
