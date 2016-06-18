function balanceController($scope, $stateParams, $state, $rootScope, accountCreateService) {



  $scope.groups = $rootScope.account.participants;

  $scope.group2s = $rootScope.account.participants;



  $scope.toggleGroup = function(group) {
    group.show = !group.show;
  };
  $scope.isGroupShown = function(group) {
    return group.show;
  };



  $scope.toggleGroup = function(group2) {
    group2.show = !group2.show;
  };
  $scope.isGroupShown = function(group2) {
    return group2.show;
  }


}
