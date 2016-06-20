function depensesService($http, global){

  return {
    findAll: function() {
      return $http.get('http://' + global.host + ':' + global.port + '/api/expenses/');
    },
  getById: function(id) {
    return $http.get('http://' + global.host + ':' + global.port + '/api/expenses/' + id);
  },
  update: function(id, data) {
    return $http.put('http://' + global.host + ':' + global.port + '/api/expenses/' + id, data);
  },
  create: function(data) {
    return $http.post('http://' + global.host + ':' + global.port + '/api/expenses/', data);
  },
  delete: function(id) {
    return $http.delete('http://' + global.host + ':' + global.port + '/api/expenses/' + id);
  }
};

}
