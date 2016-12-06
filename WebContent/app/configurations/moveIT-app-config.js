/* Move It App Config File
 * @Author: Himanshu
 */ 
var moveitApp = {
		bootstrap : function(){
			angular.module('moveitApp',['ui.router', 'ngResource', 'ngMaterial', 'ngAnimate', 'ngMessages','welcome','basic-info']);
		},
		routerConfig : function(){
			angular.module('moveitApp').config(['$urlRouterProvider', '$stateProvider','$provide', function (urlRouterProvider, stateProvider,$provide) {

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
				});
				$provide.factory('moveitAppUtil',function(){
					return{
						notNull : function(value){
							if(value != null && value != undefined && value != ''){
								return true;
							}
							else{
								return false;
							}
						}
					}

				});
			}]);
		}
}
moveitApp.bootstrap();
moveitApp.routerConfig();