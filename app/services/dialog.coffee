null

### @ngInject ###
global.cobudgetApp.factory 'Dialog', ($mdDialog) ->
  new class Dialog

    alert: (args = {}) ->
      alert = $mdDialog.alert
        title: args.title
        content: args.content
        ok: args.ok || 'close'
      $mdDialog.show(alert)

    confirm: (args = {}) ->
      confirm = $mdDialog.confirm
        title: args.title 
        content: args.content
        ok: args.confirm || 'ok'
        cancel: args.cancel || 'cancel'
      $mdDialog.show(confirm)

    custom: (args = {}) ->
      $mdDialog.show(args)