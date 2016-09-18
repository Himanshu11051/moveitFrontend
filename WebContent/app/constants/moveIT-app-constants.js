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
				                        ],
				                        BASIC_INFO_HEADER : [
				                                             { name : 'Step1', text : 'What do you plan to move ?'
				                                             },
				                                             { name : 'Step2', text : 'When and where do you plan to move ?'
				                                             },
				                                             { name : 'Step3', text : 'Please pick the items you want to move from your home !'
				                                             },
				                                             { name : 'Step4', text : 'What all services do you wish to seek ?'
				                                             },
				                                             { name : 'Step5', text : 'When can we contact you to discuss your requirements ?'
				                                             },
				                                             { name : 'Step6', text : 'How can we contact you ?'
				                                             }
				                                             ]
			});
		}
}
moveItAppConstants.moveItAppConstant();