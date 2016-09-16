/* Move It App Constants File
 * @Author: Himanshu
 */ 

var moveItAppConstants = {
		moveItAppConstant : function(){
			angular.module('moveitApp').constant('moveItAppConstant',{
				BASIC_INFO_TEMPLATES : [
				                        { name : 'Step1', url : 'app/views/basic-info1.html'
				                        },
				                        { name : 'Step2', url : 'app/views/basic-info2.html'
				                        },
				                        { name : 'Step3', url : 'app/views/basic-info3.html'
				                        },
				                        { name : 'Step4', url : 'app/views/basic-info4.html'
				                        },
				                        { name : 'Step5', url : 'app/views/basic-info5.html'
				                        },
				                        { name : 'Step6', url : 'app/views/basic-info6.html'
				                        }
				                       ]
			});
		}
}
moveItAppConstants.moveItAppConstant();