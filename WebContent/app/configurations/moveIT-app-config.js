/* Move It App Config File
 * @Author: Himanshu
 */ 
var moveitApp = {
		bootstrap : function(){
			angular.module('moveitApp',['ui.router', 'ngResource', 'ngMaterial', 'ngAnimate', 'ngMessages','welcome','basic-info']);
		},
		routerConfig : function(){
			angular.module('moveitApp').config(['$urlRouterProvider', '$stateProvider', function (urlRouterProvider, stateProvider) {

				urlRouterProvider.otherwise('home/welcome');
				stateProvider.state('home', {
					url: '/home',
					templateUrl: 'app/views/app-container.html',
					controller: 'moveitAppCtrl'
				})
				.state('home.about', {
					url: '/about',
					templateUrl: 'app/views/aboutUs.html',
					controller: ''
				})
				.state('home.contact', {
					url: '/contact',
					templateUrl: 'app/views/contact.html',
					controller: ''
				})
			}]);
		}
}
moveitApp.bootstrap();
moveitApp.routerConfig();