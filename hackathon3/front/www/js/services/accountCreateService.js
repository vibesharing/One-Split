function accountCreateService($http, global){
  return {
    findAll: function() {
      return $http.get('http://' + global.host + ':' + global.port + '/api/accounts/');
    },
  getById: function(id) {
    return $http.get('http://' + global.host + ':' + global.port + '/api/accounts/' + id);
  },
  update: function(id, data) {
    return $http.put('http://' + global.host + ':' + global.port + '/api/accounts/' + id, data);
  },
  create: function(data) {
    return $http.post('http://' + global.host + ':' + global.port + '/api/accounts/', data);
  },
  delete: function(id) {
    return $http.delete('http://' + global.host + ':' + global.port + '/api/accounts/' + id);
  }
};

}
