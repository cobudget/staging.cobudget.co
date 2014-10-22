angular.module('auth').directive('loginModal', function (AUTH_EVENTS) {
  return {
    restrict: 'A',
    controller: 'LoginModalCtrl',
    link: function(scope) {
      scope.$on(AUTH_EVENTS.notAuthenticated, scope.open);
      scope.$on(AUTH_EVENTS.sessionTimeout, scope.open);
    }
  };
})

.controller('LoginModalCtrl', function ($scope, $modal, AuthService) {
  // This should probably be stored in a login service instead?
  AuthService.loginModalCtrl = $scope;

  $scope.open = function () {
//    if ($scope.modalInstance) {
//      console.log('modal force closed!')
//      $scope.modalInstance.close();
//    }
//    console.log('modal opened!')
    if (!$scope.modalInstance) {
      $scope.modalInstance = $modal.open({
        templateUrl: 'app/auth/login_modal.html',
        scope: $scope
      });

      $scope.modalInstance.result.then(function () {
        $scope.modalInstance = null;
      }, function () {
        $scope.modalInstance = null;
      });
    }
  };

  $scope.close = function () {
    $scope.modalInstance.close()
  }
})