/* Basic Info Controller File
 * @Author: Himanshu
 */

var basicInfoActions = {
		basicInfoCtrl : function(){
			angular.module('basic-info').controller('basicInfoCtrl',['$rootScope','$scope','$state','$timeout','moveitAppService','moveItAppConstant','moveitAppUtil',function($rootscope, $scope, $state, $timeout, moveitAppService, moveItAppConstant, moveitAppUtil){

				$scope.saveDetailsRequest = {};
				$scope.saveDetailsRequest.customerName = '';
				$scope.saveDetailsRequest.customerPhoneNo = '';
				$scope.saveDetailsRequest.customerEmail = '';
				$scope.saveDetailsRequest.shiftingDate = new Date();
				$scope.saveDetailsRequest.selectedItemsList = [];
				
				var saveAppData = moveitAppService.setAppData();

				/* Code to change steps start here */
				$scope.currentStep = 0;
				$scope.changeStepForward = function() {
					$scope.currentStep ++;					
				};
				$scope.changeStepBackwards = function() {
					$scope.currentStep --;
				};			
				/* Code to change steps ends here */

				
				/* Mapping of constants  with scope starts here */
				$scope.basicInfoTemplates = moveItAppConstant.BASIC_INFO_TEMPLATES;
				$scope.basicInfoHeader = moveItAppConstant.BASIC_INFO_HEADER;
				$scope.basicInfoMoveCategory = moveItAppConstant.BASIC_INFO_MOVE_CATEGORY;
				$scope.saveDetailsRequest.basicInfoServiceRequired = moveItAppConstant.BASIC_INFO_SERVICE_REQUIRED;
				$scope.saveDetailsRequest.basicInfoContactTime = moveItAppConstant.BASIC_INFO_CONTACT_TIME;
				$scope.moveItTabsCategory = moveItAppConstant.MOVEIT_TAB_CATEGORY;
				$scope.moveItHomeItemCategory = moveItAppConstant.MOVEIT_HOME_ITEM_CATEGORY;
				/* Mapping of constants  with scope ends here */

				/* Google Autocomplete place search code starts here */
				var autocomplete;
				var options = {
						types : ['regions'],
						bounds: defaultBounds,
						componentRestrictions: {country: 'in'}
				}
				var defaultBounds = new google.maps.LatLngBounds(new google.maps.LatLng(28.6353, 77.225));
				$scope.initAutocomplete = function(autocompleteId) {
					// Create the autocomplete object, restricting the search to geographical
					// location types.
					autocomplete = new google.maps.places.Autocomplete(
							/** @type {!HTMLInputElement} */(document.getElementById(autocompleteId)),
							{types: ['geocode','establishment'],bounds: defaultBounds,componentRestrictions: {country: 'in'}});

					// When the user selects an address from the dropdown, populate the address
					// fields in the form.
				}


				// Bias the autocomplete object to the user's geographical location,
				// as supplied by the browser's 'navigator.geolocation' object.
				$scope.geolocate = function() {

					if (navigator.geolocation) {
						navigator.geolocation.getCurrentPosition(function(position) {
							var geolocation = {
									lat: position.coords.latitude,
									lng: position.coords.longitude
							};
							var circle = new google.maps.Circle({
								center: geolocation,
								radius: position.coords.accuracy
							});
							autocomplete.setBounds(circle.getBounds());
						});
					}
				}


				/* Google Autocomplete place search code ends here */
				$scope.saveDetailsRequest.sourceLocation = '';
				$scope.saveDetailsRequest.destinationLocation = '';
				// fetches source location
				$scope.getSourceLocation = function(event,sourceId){
					event.target.placeholder = '';
					$timeout(function(){
						var data = $("#"+sourceId).val();
						console.log(2);
						$scope.saveDetailsRequest.sourceLocation = data;
						console.log(data); 
						console.log($scope.saveDetailsRequest.sourceLocation);
					},1000)
				}
				// fetches destination location
				$scope.getDestinationLocation = function(event,destId){
					event.target.placeholder = '';
					$timeout(function(){
						var data = $("#"+destId).val();
						console.log(2);
						$scope.saveDetailsRequest.destinationLocation = data;
						console.log(data); 
						console.log($scope.saveDetailsRequest.destinationLocation);
					},1000)
				}
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
						$scope.saveDetailsRequest.selectedItemsList.push(item);
					}
					else{
						for(var i = 0 ; i < $scope.saveDetailsRequest.selectedItemsList.length ; i++){
							if($scope.saveDetailsRequest.selectedItemsList[i].selected == item.selected){
								$scope.saveDetailsRequest.selectedItemsList.splice(i,1);
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
					$scope.saveDetailsRequest.selectedItemsList.splice(index,1);
				};
				/* Code to remove added items from cart ends here */
				
				$scope.callUsFlag = false;
				/* Code to save app data starts here */
				$scope.saveMoveDetails = function(type) {
					if(type == 'OTP'){
						console.log($scope.saveDetailsRequest);
						$scope.saveMoveITData();
					}
					else{
						if(!$scope.callUsFlag){
							$.snackbar({content: "Our customer service team will call you in a while. Thanks for choosing us !",timeout:2500});
							console.log($scope.saveDetailsRequest);
							$scope.saveMoveITData();
						}
					}
				};
				
				$scope.saveMoveITData = function() {
					saveAppData.setdata({},$scope.saveDetailsRequest).$promise.then(function(data) {
						if(data != undefined && data != null){
							$.snackbar({content: "Data saved successfully",timeout:2500});
//							mprogress.end();
						}
						else{
							$.snackbar({content: "Please try again",timeout:2500});
//							mprogress.end();
						}
					},
					function(error) {
						$.snackbar({content: "Please try again",timeout:2500});
//						mprogress.end();
					});	
				}
				/* Code to save app data ends here */
				
				/* Code for form validation starts here */
				$scope.phoneRegex = '^[7-9][0-9]{9}$'
				$scope.validateCustomerDetailsForm = function(valid,type) {
					switch(type){
					case 'PhoneNo' :
						if(!valid && $scope.saveDetailsRequest.customerPhoneNo != ''){
							$.snackbar({content: "Please enter a valid phone number",timeout:2500});
						}
						break;
					case 'Email' : 
						if(!valid && $scope.saveDetailsRequest.customerEmail != ''){
							$.snackbar({content: "Please enter a valid email address",timeout:2500});
						}
						break;
					}
					
				};
				/* Code for form validation ends here */
				
			}]);
		},
};

basicInfoActions.basicInfoCtrl();