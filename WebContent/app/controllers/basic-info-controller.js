/* Basic Info Controller File
 * @Author: Himanshu
 */

var basicInfoActions = {
		basicInfoCtrl : function(){
			angular.module('basic-info').controller('basicInfoCtrl',['$rootScope','$scope','$state','moveitAppService','moveItAppConstant',function($rootscope, $scope, $state, moveitAppService, moveItAppConstant){

				$scope.selectedItemsList = [];

				/* Code to change steps start here */
				$scope.currentStep = 0;
				$scope.changeStepForward = function() {
					$scope.currentStep ++;
				};
				$scope.changeStepBackwards = function() {
					$scope.currentStep --;
				};			
				/* Code to change steps ends here */

				$scope.shiftingDate = '';

				/* Mapping of constants  with scope starts here */
				$scope.basicInfoTemplates = moveItAppConstant.BASIC_INFO_TEMPLATES;
				$scope.basicInfoHeader = moveItAppConstant.BASIC_INFO_HEADER;
				$scope.basicInfoMoveCategory = moveItAppConstant.BASIC_INFO_MOVE_CATEGORY;
				$scope.basicInfoServiceRequired = moveItAppConstant.BASIC_INFO_SERVICE_REQUIRED;
				$scope.basicInfoContactTime = moveItAppConstant.BASIC_INFO_CONTACT_TIME;
				$scope.moveItTabsCategory = moveItAppConstant.MOVEIT_TAB_CATEGORY;
				$scope.moveItHomeItemCategory = moveItAppConstant.MOVEIT_HOME_ITEM_CATEGORY;
				/* Mapping of constants  with scope ends here */

				/* Basic info step3 tabing code starts here */
				$scope.currentTab = 0;
				$scope.showActiveTab = function(currentTab) {
					$scope.currentTab = currentTab;
				};
				/* Basic info step3 tabing code ends here */

				/* Code to add selected items to cart starts here */
				$scope.addSelectedItem = function(item,index) {
					item.selected = !item.selected;
					if(item.selected){
						item.count = 1;
						$scope.selectedItemsList.push(item);
					}
					else{
						for(var i = 0 ; i < $scope.selectedItemsList.length ; i++){
							if($scope.selectedItemsList[i].selected == item.selected){
								$scope.selectedItemsList.splice(i,1);
							}
						}

					}
				};
				/* Code to add selected items to cart ends here */

				/* Code to remove added items from cart starts here */
				$scope.removeAddedItem = function(item,index){
					angular.forEach($scope.moveItHomeItemCategory, function(obj){
						if(obj.hasOwnProperty(item.type)){
							for(var i = 0 ; i < obj[item.type].length ; i++){
								if( obj[item.type][i].name == item.name){
									obj[item.type][i].selected = false;
								}
							}
						}
					});
					$scope.selectedItemsList.splice(index,1);
				};
				/* Code to remove added items from cart ends here */
			}]);
		},
};

basicInfoActions.basicInfoCtrl();