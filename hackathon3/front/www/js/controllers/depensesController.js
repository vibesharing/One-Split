function depensesController($scope, $stateParams, $state, $rootScope, $ionicModal, accountCreateService, $ionicHistory) {
  $scope.expense = {};
  $scope.goToExpenseDetail = function(expense) {
    $state.go('tab.depensesDetails', {
      name: expense.name
    });

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
    var checkOne =0;
    //transform expense.forwhom object into an array
    $scope.forwhomArray = [];
    for (var i in $scope.expense.forwhom) {
      $scope.forwhomArray.push(i);
    }
    $scope.expense.forwhom = $scope.forwhomArray;
    //transform expense.forwhom object into an array


    // $rootScope.account.expenses = [];
    $rootScope.account.expenses.push($scope.expense);

    var price = $scope.expense.cost / $scope.expense.forwhom.length;
    $scope.debt = {
      name: $scope.expense.name,
      amount: price,
      personToPayBack: $scope.expense.payer
    };

    for (var h = 0; h < $scope.expense.forwhom.length; h++) {
      for (var j = 0; j < $rootScope.account.participants.length; j++) {
        // console.log($rootScope.account.participants[j].name + ''+ $scope.expense.forwhom[h]);
        // add the debts to the beneficiaries
        if ($rootScope.account.participants[j].name == $scope.expense.forwhom[h] && $scope.expense.forwhom[h] != $scope.expense.payer) {

          $rootScope.account.participants[j].debts.push($scope.debt);
          $rootScope.account.participants[j].balance -= price;

          console.log('trouvé');

        }
        //add the equity to the payer if he is part of the beneficiaries
        else if ($rootScope.account.participants[j].name == $scope.expense.payer && $scope.expense.forwhom[h] == $scope.expense.payer && checkOne < 1 ) {
            $rootScope.account.participants[j].equity.push($scope.debt);
            $rootScope.account.participants[j].balance += price * $scope.expense.forwhom.length - price;
            checkOne = 1;
          }

        //add the equity to the payer if he is NOT part of the beneficiaries

        else if($rootScope.account.participants[j].name == $scope.expense.payer && $scope.expense.forwhom[h] != $scope.expense.payer && checkOne < 1){
          console.log($rootScope.account.participants[j].name);
          $rootScope.account.participants[j].equity.push($scope.debt);
          $rootScope.account.participants[j].balance += $scope.expense.cost;
          checkOne = 1;
        }


      }
    }
    accountCreateService.update($rootScope.account._id, $rootScope.account).then(function() {
      $scope.expense = {};
      console.log('done');
    });
    $scope.closeModal();

  };









  //================================================================================depensesDetails

  $scope.myFilter = $stateParams.name;

  $scope.deleteExpense = function(expense) {
    console.log(expense);
    var searchTerm = expense.name,
      index = -1;
    for (var i = 0, len = $rootScope.account.expenses.length; i < len; i++) {
      if ($rootScope.account.expenses[i].name === searchTerm) {
        index = i;
        break;
      }
    }
    $rootScope.account.expenses.splice(index, 1);
    accountCreateService.update($rootScope.account._id, $rootScope.account).then(function() {
      console.log('done');
    });
  };
  $scope.goBack = function() {
    $ionicHistory.goBack(-1);

  };

}
