module.exports = (params) ->
  template: require('./paid-bucket-dialog.html')
  scope: params.scope
  controller: (Dialog, LoadBar, $location, $mdDialog, $scope) ->

    $scope.cancel = ->
      $mdDialog.cancel()

    $scope.proceed = ->
      $scope.cancel()
      LoadBar.start()
      $scope.bucket.paid()
        .then ->
          groupId = $scope.bucket.groupId
          LoadBar.stop()
        .catch ->
          Dialog.alert({title: "Error!"})
          LoadBar.stop()