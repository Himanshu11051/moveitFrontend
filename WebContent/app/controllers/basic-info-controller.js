/* Basic Info Controller File
 * @Author: Himanshu
 */

var basicInfoActions = {
		basicInfoCtrl : function(){
			angular.module('basic-info').controller('basicInfoCtrl',['$rootScope','$scope','$state','moveitAppService','moveItAppConstant',function($rootscope, $scope, $state, moveitAppService, moveItAppConstant){
				$scope.currentStep = 0;
				$scope.basicInfoTemplates = moveItAppConstant.BASIC_INFO_TEMPLATES;
				$scope.changeStepForward = function() {
					$scope.currentStep ++;
				};
				$scope.changeStepBackwards = function() {
					$scope.currentStep --;
				};
				$scope.basicInfoHeader = moveItAppConstant.BASIC_INFO_HEADER;
				$scope.shiftingDate = '';
			}]);
		},
};
basicInfoActions.basicInfoCtrl();