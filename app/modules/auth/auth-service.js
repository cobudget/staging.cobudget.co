/* @ngInject */
module.exports = function ($http, authCookie, authModel, config) {

  var authService = {};
  var authModel = authService.model = authModel;

  // back compat
  authService.getCurrentUser = function () {
    return authModel;
  }

  authService.login = function (loginCredentials) {
    var credentials = {
      user: loginCredentials, // email, password
    };
    return $http
      .post(config.apiEndpoint + '/auth/log_in.json', credentials)
      .then(function (res) {
        authModel.set(res.data.user)
        authModel.trigger('login-success', res.data.user)
        return authModel
      })
  };

  authService.forgotLogin = function (forgotCredentials) {
    var credentials = {
      user: forgotCredentials, // email
    };
    return $http
      .post(config.apiEndpoint + "/users/reset_password", credentials)
      .then(function (res) {
        return res.data.user;
      });
  }

  authService.resetLogin = function (resetCredentials) {
    var credentials = {
      user: resetCredentials, // resetPasswordToken, password, passwordConfirmation
    };
    return $http
      .put(config.apiEndpoint + "/users/reset_password", credentials)
      .then(function (res) {
        return null;
      });
  }

  authService.logout = function () {
    authModel.clear();
    authModel.trigger("logout-success");
  };

  return authService;
};