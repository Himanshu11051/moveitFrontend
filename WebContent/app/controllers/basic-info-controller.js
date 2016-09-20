/* Basic Info Controller File
 * @Author: Himanshu
 */

var basicInfoActions = {
		basicInfoCtrl : function(){
			angular.module('basic-info').controller('basicInfoCtrl',['$rootScope','$scope','$state','moveitAppService','moveItAppConstant',function($rootscope, $scope, $state, moveitAppService, moveItAppConstant){
				$scope.currentStep = 0;
				$scope.selectedItemsList = [];
				$scope.basicInfoTemplates = moveItAppConstant.BASIC_INFO_TEMPLATES;
				$scope.changeStepForward = function() {
					$scope.currentStep ++;
				};
				$scope.changeStepBackwards = function() {
					$scope.currentStep --;
				};
				$scope.basicInfoHeader = moveItAppConstant.BASIC_INFO_HEADER;
				$scope.shiftingDate = '';
				$scope.basicInfoMoveCategory = moveItAppConstant.BASIC_INFO_MOVE_CATEGORY;
				$scope.basicInfoServiceRequired = moveItAppConstant.BASIC_INFO_SERVICE_REQUIRED;
				$scope.basicInfoContactTime = moveItAppConstant.BASIC_INFO_CONTACT_TIME;
				$scope.moveItTabsCategory = moveItAppConstant.MOVEIT_TAB_CATEGORY;
				$scope.moveItHomeItemCategory = moveItAppConstant.MOVEIT_HOME_ITEM_CATEGORY;
				$scope.currentTab = 0;
				$scope.showActiveTab = function(currentTab) {
					$scope.currentTab = currentTab;
				};
				$scope.selectedItem = function(item,index) {
					item.selected = !item.selected;
					if(item.selected){
						$scope.selectedItemsList.push(item);
					}
					else{
						for(var i = 0 ; i < $scope.selectedItemsList.length ; i++){
							if($scope.selectedItemsList[i].selected == item.selected){
								$scope.selectedItemsList.splice(i,1);
							}
						}
						
					}
				}
			}]);
		},
};
basicInfoActions.basicInfoCtrl();