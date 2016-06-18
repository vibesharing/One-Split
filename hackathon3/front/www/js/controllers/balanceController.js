function balanceController($scope, $stateParams, $state, $rootScope){

  $scope.groups = [{

        name: 'Balances',
        items: [{
          name: 'Augustin',
          count:25,
        },
        {
          name: 'Greg',
          count: -25,
        }],
        show: false
      }];



    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function(group) {
      group.show = !group.show;
    };
    $scope.isGroupShown = function(group) {
      return group.show;
    };



      $scope.group2s = [{


                name: 'Faites vos comptes',
                items: [{
                  name: 'Augustin',
                  count:25,
                  receiver: 'greg'
                },
                {
                  name: 'Greg',
                  count: -25,
                  receiver: 'Augustin'
                }],
                show: false
                }];



        /*
         * if given group2 is the selected group2, deselect it
         * else, select the given group2
         */
        $scope.toggleGroup = function(group2) {
          group2.show = !group2.show;
        };
        $scope.isGroupShown = function(group2) {
          return group2.show;
        }


}
