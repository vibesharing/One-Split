function dashboardController($scope, $timeout, $rootScope, $stateParams, $state, accountCreateService) {
  $rootScope.hideTabs = 'tabs-item-hide';

$scope.openAccount = function(account){
  $rootScope.account = account;
  $rootScope.hideTabs = '';
  $state.go('tab.depenses');

};

  function load(){
    accountCreateService.findAll().then(function(res){
      $scope.accounts = res.data;
    });
  }
  load();

  $scope.CreateAccount = function() {
    var newAccount = {};
    console.log("accountCreated");
    accountCreateService.create(newAccount).then(function(res){
      $rootScope.account = res.data;
      console.log("accountCreated");
        $state.go("tab.accountCreate");
    });


  };
}
