function config ($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.dashboard', {
    url: '/dashboard',
    views: {
      'tab-dashboard': {
        templateUrl: 'templates/tab-dashboard.html',
        controller: 'dashboardController'
      }
    }
  })
  .state('tab.accountCreate', {
    url: '/accountCreate',
    views: {
      'tab-accountCreate': {
        templateUrl: 'templates/tab-accountCreate.html',
        controller: 'accountCreateController'
      }
    }
  })

  .state('tab.depenses', {
      url: '/depenses',
      views: {
        'tab-depenses': {
          templateUrl: 'templates/tab-depenses.html',
          controller: 'depensesController'
        }
      }
    })
    .state('tab.depensesDetails', {
        url: '/depenses/:name',
        views: {
          'tab-depenses': {
            templateUrl: 'templates/tab-depensesDetails.html',
            controller: 'depensesController'
          }
        }
      })
    .state('tab.balance', {
      url: '/balance',
      views: {
        'tab-balance': {
          templateUrl: 'templates/tab-balance.html',
          controller: 'balanceController'
        }
      }
    })

  .state('tab.config', {
    url: '/config',
    views: {
      'tab-config': {
        templateUrl: 'templates/tab-config.html',
        controller: 'configController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dashboard');

}
