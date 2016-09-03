/* Move It App Config File
 * @Author: Himanshu
 */ 
var moveitApp = {
		bootstrap : function(){
			angular.module('moveitApp',['ui.router', 'ngResource', 'ngMaterial', 'ngAnimate', 'ngMessages']);
		},
		routerConfig : function(){
			angular.module('moveitApp').config(['$urlRouterProvider', '$stateProvider', function (urlRouterProvider, stateProvider) {

				urlRouterProvider.otherwise('home');
				stateProvider.state('home', {
					url: '/home',
					templateUrl: 'app/views/home.html',
					controller: 'moveitAppCtrl'
				})
			}]);
		}
}
moveitApp.bootstrap();
moveitApp.routerConfig();