/* Move It App Constants File
 * @Author: Himanshu
 */ 

var moveItAppConstants = {
		moveItAppConstant : function(){
			angular.module('moveitApp').constant('moveItAppConstant',{
				BASIC_INFO_TEMPLATES : [
				                        { name : 'Step1', url : 'app/views/basic-info1.html'},				                        
				                        { name : 'Step2', url : 'app/views/basic-info2.html'},
				                        { name : 'Step3', url : 'app/views/basic-info3.html'},
				                        { name : 'Step4', url : 'app/views/basic-info4.html'},
				                        { name : 'Step5', url : 'app/views/basic-info5.html'},
				                        { name : 'Step6', url : 'app/views/basic-info6.html'}
				                       ],
				  BASIC_INFO_HEADER : [
				                        { name : 'Step1', text : 'What do you plan to move ?'},
				                        { name : 'Step2', text : 'When and where do you plan to move ?'},
				                        { name : 'Step3', text : 'Please pick the items you want to move from your home !'},
				                        { name : 'Step4', text : 'What all services do you wish to seek ?'},
				                        { name : 'Step5', text : 'When can we contact you to discuss your requirements ?'},
				                        { name : 'Step6', text : 'How can we contact you ?'}
				                       ],		                        
		   BASIC_INFO_MOVE_CATEGORY : [
				                        {category : 'Home'},
				                        {category : 'Office'},
				                        {category : 'Vehicle'}                           
				                       ],
		BASIC_INFO_SERVICE_REQUIRED : [
		                               {type : ' Packing'},
		                               {type : ' Loading'},
		                               {type : ' Unloading'},
		                               {type : ' Unpacking'}
		                               ],
	        BASIC_INFO_CONTACT_TIME : [
	                                   {time : "Any time, I'm flexible"},
	                                   {time : 'Early morning (7AM to 9AM)'},
	                                   {time : 'Morning (9AM to 12PM)'},
	                                   {time : 'Lunch (12PM to 3PM)'},
	                                   {time : 'Evening (3PM to 7PM)'},
	                                   {time : 'Night (7PM to 9PM)'}
		                              ],
                MOVEIT_TAB_CATEGORY : [
                                       {tab : 0, name : 'Bed Room'},
                                       {tab : 1, name : 'Dining Room'},
                                       {tab : 2, name : 'Drawing Room'},
                                       {tab : 3, name : 'Kitchen'},
                                       {tab : 4, name : 'Others'},
                                      ],
          MOVEIT_HOME_ITEM_CATEGORY : [
                                       {
                                    	   Bedroom : [
                                    	              {item : 1, name: 'Bed'},
                                    	              {item : 2, name: 'TV'},
                                    	              {item : 3, name: 'Wardrobe '},
                                    	              {item : 4, name: 'Table'},
                                    	              {item : 5, name: 'Chair'},
                                    	              ]                                    	              
                                       },
                                       {
                                    	   DiningRoom : [
                                          	              {item : 1, name: 'Abc'},
                                          	              {item : 2, name: 'Def'},
                                          	              {item : 3, name: 'Ghi '},
                                          	              {item : 4, name: 'RTY'},
                                          	              {item : 5, name: 'ZXC'},
                                          	              ]
                                       }
                                      ]                      
		                                                         
			});
		}
}
moveItAppConstants.moveItAppConstant();