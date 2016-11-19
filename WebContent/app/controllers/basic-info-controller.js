/* Basic Info Controller File
 * @Author: Himanshu
 */

var basicInfoActions = {
		basicInfoCtrl : function(){
			angular.module('basic-info').controller('basicInfoCtrl',['$rootScope','$scope','$state','$timeout','moveitAppService','moveItAppConstant',function($rootscope, $scope, $state, $timeout, moveitAppService, moveItAppConstant){

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

				/* Google Autocomplete place search code starts here */
				var autocomplete;
				var sourceInput = $('#autocomplete');
				var options = {
						types : ['regions'],
						bounds: defaultBounds,
						componentRestrictions: {country: 'in'}
				}
				var defaultBounds = new google.maps.LatLngBounds(new google.maps.LatLng(28.6353, 77.225));
			       $scope.initAutocomplete = function() {
			        // Create the autocomplete object, restricting the search to geographical
			        // location types.
			        autocomplete = new google.maps.places.Autocomplete(
			            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
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
			      $scope.sourceLocation = '';
			      $scope.setSource = function() {
			    	  console.log(1);
			    	  
			    	 
				}
				
			      $scope.getSourceLocation = function(event){
			    	  event.target.placeholder = '';
			    	  $timeout(function(){
			    		  var data = $("#autocomplete").val();
				    	  console.log(2);
				    	  $scope.sourceLocation = data;
				    	  console.log(data); 
				    	  console.log($scope.sourceLocation);
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