function depensesController($scope, $stateParams, $state, $rootScope, $ionicModal, accountCreateService, $ionicHistory) {
  $scope.expense = {};
  $scope.goToExpenseDetail = function(expense) {
    $state.go('tab.depensesDetails', {name:expense.name});

  };

  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
  $scope.createExpense = function() {
    //transform expense.forwhom object into an array
    $scope.forwhomArray = [];
    for (var i in $scope.expense.forwhom) {
      $scope.forwhomArray.push(i);
    }
    $scope.expense.forwhom = $scope.forwhomArray;
    //transform expense.forwhom object into an array


    // $rootScope.account.expenses = [];
    $rootScope.account.expenses.push($scope.expense);

    console.log($rootScope.account.expenses);
    accountCreateService.update($rootScope.account._id, $rootScope.account).then(function() {
      $scope.expense = {};
      console.log('done');
    });
    $scope.closeModal();

  };


//================================================================================depensesDetails

$scope.myFilter = $stateParams.name;

$scope.deleteExpense = function(expense){
  console.log(expense);
  var searchTerm = expense.name,
    index = -1;
for(var i = 0, len = $rootScope.account.expenses.length; i < len; i++) {
    if ($rootScope.account.expenses[i].name === searchTerm) {
        index = i;
        break;
    }
}
$rootScope.account.expenses.splice(index,1);
accountCreateService.update($rootScope.account._id, $rootScope.account).then(function(){
  console.log('done');
})
};
$scope.goBack = function(){
$ionicHistory.goBack(-1);

};

}
