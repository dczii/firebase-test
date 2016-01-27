// create our angular module and inject firebase
angular.module('scheduleApp', ['firebase'])

// create our main controller and get access to firebase
.controller('mainController', function($scope, $firebase) {
  
  // our application code will go here

		// connect to firebase 
		var ref = new Firebase("https://customtest.firebaseio.com/days");  
		var fb = $firebase(ref);

		// sync as object 
	  		var syncObject = fb.$asObject();
	  	// three way data binding
	    	syncObject.$bindTo($scope, 'days');

	    //uncheck all checkbox
			    $scope.x = function () {
		        $scope.approve=false;
		        $scope.approve[0].enabled=true;
		    	}

		// function to set the default data
			  $scope.reset = function() {    

			    fb.$set({
			      monday: {
			        name: 'Monday',
			        slots: {
			          0900: {
			            time: '9:00am',
			            booked: false,
			            approved: false
			          },
			          0110: {
			            time: '11:00am',
			            booked: false,
			            approved: false
			          }
			        }
			      },
			      tuesday: {
			        name: 'Tuesday',
			        id: 2,
			        slots: {
			          0900: {
			            time: '9:00am',
			            booked: false,
			            approved: false
			          },
			          0110: {
			            time: '11:00am',
			            booked: false,
			            approved: false
			          }
			        }
			      },
			      wednesday: {
			        name: 'Wednesday',
			        slots: {
			          0900: {
			            time: '9:00am',
			            booked: false,
			            approved: false
			          },
			          0110: {
			            time: '11:00am',
			            booked: false,
			            approved: false
			          }
			        }
			      },
			    });    

			    
			  };

			  
});

