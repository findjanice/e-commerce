app.service('mainService', function($http, $q) {

  this.getProduct = function() {
    var deferred = $q.defer();
    return $http({
        url: 'http://localhost:8080/api/shops',
        method: 'GET'
      })
      // .then(function(data) {
      //   console.log(data);
      //   deferred.resolve({
      //     product: data.data.product,
      //     color: data.data.color,
      //     size: data.data.size,
      //     cost: data.data.cost
      //   })
      // });
      // return deferred.promise;
  };

  this.deleteProduct = function(product) {
    return $http({
      url: 'http://localhost:8080/api/shops?product=' + product,
      method: 'DELETE'
    })
  };

  this.postProduct = function(data) {
    console.log('this is in postProduct', data);
    return $http({
      url: 'http://localhost:8080/api/shops',
      method: 'POST',
      data: data
    })
  }

  //end service
})
