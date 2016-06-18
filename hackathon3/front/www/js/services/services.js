angular.module('starter.services', [])
.directive('hideTabs', function($rootScope) {
  return {
      restrict: 'A',
      link: function($scope, $el) {
          $rootScope.hideTabs = 'tabs-item-hide';
          $scope.$on('$destroy', function() {
              $rootScope.hideTabs = '';
          });
      }
  };
})
.service('accountCreateService', accountCreateService)
.service('depensesService', depensesService)
;
