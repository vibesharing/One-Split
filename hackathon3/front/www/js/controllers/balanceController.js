function balanceController($scope, $stateParams, $state, $rootScope, accountCreateService) {
  $scope.toggleGroup = function(group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function(group) {
      return $scope.shownGroup === group;
    };


$scope.toggleGroup2 = function(group2) {
    if ($scope.isGroup2Shown(group2)) {
      $scope.shownGroup2 = null;
    } else {
      $scope.shownGroup2 = group2;
    }
  };
  $scope.isGroup2Shown = function(group2) {
    return $scope.shownGroup2 === group2;
  };
}
