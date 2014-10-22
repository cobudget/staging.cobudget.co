angular.module('auth').controller('LoginController',
  function ($scope, $rootScope, AuthService) {
    $scope.credentials = {
      email: '',
      password: ''
    };
    $scope.login = function (credentials) {
      AuthService.login(credentials);
    };
    $scope.ok = function() {}; // Stub out when we're not in modal
});
