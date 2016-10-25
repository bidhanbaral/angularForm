formApp.controller('formCtrl', function($scope, $mdDialog) {
	 $scope.status = '  ';
    $scope.user = {
      title: 'Title',
      Price: 'Price',
      Tags: 'tags',
      lastName: '',     
      address: '1600 Amphitheatre Pkwy',
      city: 'Mountain View',
      state: 'CA',
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
      postalCode: '94043'
    };

    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });
/*--------- Hide and  Show form ----------*/
    $scope.fomrHide=true;
	$scope.viewForm = function() { 
	
	$scope.fomrHide=true;
	}
//-------------- extra input field ---------

    $scope.modelInput=true;
	$scope.modelInputField = function(data) {	
	if(data=='yup'){
	$scope.modelInput=false;
	}else{
	$scope.modelInput=true;
		}
	}

//-----
$scope.makelInput=true;
	$scope.makelInputField = function(data) {	
	alert('Hi');
	if(data=='yup'){
	$scope.makelInput=false;
	}else{
	$scope.makelInput=true;
		}
	}
//-----
$scope.yearInput=true;
	$scope.yearInputField = function(data) {	
	if(data=='yup'){
	$scope.yearInput=false;
	}else{
	$scope.yearInput=true;
		}
	}
//-----
$scope.compamyInput=true;
	$scope.companyInputField = function(data) {	
	
	if(data=='yup'){
	$scope.compamyInput=false;
	}else{
	$scope.compamyInput=true;
		}
	}
//-----
$scope.fileInput=true;
	$scope.fileInputField = function(data) {	
	if(data=='yup'){
	$scope.fileInput=false;
	}else{
	$scope.fileInput=true;
		}
	}
//-----
$scope.locationInput=true;
	$scope.locationInputField = function(data) {	
	if(data=='yup'){
	$scope.locationInput=false;
	}else{
	$scope.locationInput=true;
		}
	}
	//-----
$scope.colorInput=true;
	$scope.colorInputField = function(data) {	
	if(data=='yup'){
	$scope.colorInput=false;
	}else{
	$scope.colorInput=true;
		}
	}
	//-----
$scope.startInput=true;
	$scope.startInputField = function(data) {	
	if(data=='yup'){
	$scope.startInput=false;
	}else{
	$scope.startInput=true;
		}
	}
	//-----
$scope.endInput=true;
	$scope.endInputField = function(data) {	
	if(data=='yup'){
	$scope.endInput=false;
	}else{
	$scope.endInput=true;
		}
	}
	//-----
$scope.checkboxInput=true;
	$scope.checkboxInputField = function(data) {	
	if(data=='yup'){
	$scope.checkboxInput=false;
	}else{
	$scope.checkboxInput=true;
		}
	}
	//-----
$scope.radioInput=true;
	$scope.radioInputField = function(data) {	
	if(data=='yup'){
	$scope.radioInput=false;
	}else{
	$scope.radioInput=true;
		}
	}
	//-----
$scope.laptopInput=true;
	$scope.laptopInputField = function(data) {	
	if(data=='yup'){
	$scope.laptopInput=false;
	}else{
	$scope.laptopInput=true;
		}
	}
//---------- angular popup function------------	
 $scope.showLeftSidebar = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'form.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };
  
	function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
  });


