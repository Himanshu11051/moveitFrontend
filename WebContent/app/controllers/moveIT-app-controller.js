/* Move It App Controller File
 * @Author: Himanshu
 */ 
var moveitAppActions = {
		moveitAppCtrl : function(){
			angular.module('moveitApp').controller('moveitAppCtrl',['$rootScope','$scope','$mdToast','$state','moveitAppService',function($rootscope, $scope, $mdToast,$state,moveitAppService){
				
				$state.go('home.welcome')
				/* Web service call methods start here */
				var appStatus = moveitAppService.getAppStatus();
				
				/* Web service call methods end here */
				
				/* Web service request objects start here */
				$scope.appStatusRequest = {};
				
				/* Web service request objects end here */
				
				$scope.checkAppStatus = function() {
					appStatus.getdata({},$scope.appStatusRequest).$promise.then(function(data) {
						if(data != undefined && data != null){
//							alert(JSON.stringify(data));
							$scope.appStatusResult = data
							mprogress.end();
						}
						else{
							alert('failure');
						}
					},
					function(error) {
						alert('Rejected')
					});										
				};				
				
				
/*				$scope.showToast = function (content) {
				$mdToast.show($mdToast.simple().textContent(content).hideDelay(false));
			};
				$scope.showToast('Welcome To Move It')*/
				var mprogress = new Mprogress();
				
				$scope.gotoBasicInfo = function() {
					mprogress.start();
					$scope.checkAppStatus();	
					$state.go('home.basic-info');
				};

			}]);
		},
};
moveitAppActions.moveitAppCtrl();