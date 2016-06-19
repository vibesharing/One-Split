function accountCreateController($scope, $http, accountCreateService, $ionicHistory,$state, $rootScope ){

$scope.participant = { debts: [], equity: [], balance: 0 };
$scope.participants =[];
$scope.account = {
  expenses: []
};

  $scope.createAccount= function(){
    $scope.account.participants = $scope.participants;
    console.log($scope.account);
    $rootScope.account = $scope.account;

    accountCreateService.create($scope.account).then(function(){
      console.log('done');
      $scope.account ={};
      $scope.participants =[];
      $rootScope.hideTabs = '';
      $state.go("tab.depenses");


    });
  };
  $scope.addParticipant = function(){
    $scope.participants.push($scope.participant);
    $scope.participant = { debts: [], equity: [], balance: 0 };

  };
  $scope.removeParticipant = function(index){
    $scope.participants.splice(index,1);
    console.log($scope.participants);

  };
  $scope.return = function(){
    $ionicHistory.goBack();
  };



}
