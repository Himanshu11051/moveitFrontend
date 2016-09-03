/* Move It App Controller File
 * @Author: Himanshu
 */ 
var moveitAppActions = {
	moveitAppCtrl : function(){
		angular.module('moveitApp').controller('moveitAppCtrl',['$rootScope','$scope','$mdToast',function($rootscope, $scope, $mdToast){
			/*$scope.showToast = function (content) {
				$mdToast.show($mdToast.simple().textContent(content).hideDelay(false));
			};
			
				$scope.showToast('Welcome To Move It')*/
		
		}]);
	},
};
moveitAppActions.moveitAppCtrl();