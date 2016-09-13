angular.module('basic-info',[]).config(['$urlRouterProvider','$stateProvider',function (urlRouterProvider,stateProvider) {
	stateProvider.state('home.basic-info',{
		url : '/basic-info',
		templateUrl : 'app/views/basic-info.html',
		controller :'basicInfoCtrl'
	});
}]);