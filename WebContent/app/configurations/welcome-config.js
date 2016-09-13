angular.module('welcome',[]).config(['$urlRouterProvider','$stateProvider',function (urlRouterProvider,stateProvider) {
	stateProvider.state('home.welcome',{
		url : '/welcome',
		templateUrl : 'app/views/welcome.html',
		controller :'moveitAppCtrl'
	});
}]);