angular.module('auth').constant('AUTH_EVENTS', {
  loginSuccess: 'auth-auth-success',
  loginFailed: 'auth-auth-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})