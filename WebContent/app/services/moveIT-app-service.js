/* Move It App Service File
 * @Author: Himanshu
 */ 

var moveitAppResource = {
		moveitAppService : function(){
			angular.module('moveitApp').factory('moveitAppService',['$resource',function($resource){
				return{
					getAppStatus : function() {
						return $resource('http://reqres.in/api/users/2',{},{getdata : {method : 'GET', headers : {'Content-Type': 'application/json'} } })
					}
				}
			}]);
		}	
};
moveitAppResource.moveitAppService();