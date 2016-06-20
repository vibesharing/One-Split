function accountCreateController($scope, $http, accountCreateService, $ionicHistory, $state, $rootScope, participantsService, depensesService) {

  $scope.participant = {};
  $scope.participants = [];

  $scope.createAccount = function() {
    $rootScope.account = $scope.account;

    accountCreateService.update($rootScope.account._id,$rootScope.account).then(function() {
      console.log('done');
      $scope.account = {};
      $scope.participants = [];
      $rootScope.hideTabs = '';
      $state.go("tab.depenses");


    });
  };
  $scope.addParticipant = function() {
    console.log($scope.participant);
    participantsService.create($scope.participant).then(function(res) {
      console.log(res.data._id);
      var data = {id_participant:res.data._id};
      accountCreateService.addParticipants($rootScope.account._id, data).then(function(res){
        console.log('done');
      });

    });
    $scope.participants.push($scope.participant);
    $scope.participant = {};


  };
  $scope.removeParticipant = function(name) {
    $scope.participants.splice(name, 1);
    console.log($scope.participants);

  };
  $scope.return = function() {
    accountCreateService.delete($rootScope.account).then(function() {
      $rootScope.account = {};
      $ionicHistory.goBack();

    });
  };



}
