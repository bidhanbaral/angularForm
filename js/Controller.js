formApp.controller('formCtrl', function($scope, $mdDialog,$http) {
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
    }; // default input filed title


	  
	  
/*--------- Hide and  Show form ----------*/
    $scope.fomrHide=true;
	$scope.viewForm = function() { 
	
	$scope.fomrHide=true;
	}
//-------------- extra input field for model function  ---------

    $scope.modelInput=true;
	$scope.modelInputField = function(data) {	
	if(data=='yup'){
	$scope.modelInput=false;
	}else{
	$scope.modelInput=true;
		}
	}

//-------------- extra input field for make function  ---------
$scope.makelInput=true;
	$scope.makelInputField = function(data) {		
	if(data=='yup'){
	$scope.makelInput=false;
	}else{
	$scope.makelInput=true;
		}
	}
//-------------- extra input field for year function  ---------
$scope.yearInput=true;
	$scope.yearInputField = function(data) {	
	if(data=='yup'){
	$scope.yearInput=false;
	}else{
	$scope.yearInput=true;
		}
	}
//-------------- extra input field for Caompany function  ---------
$scope.compamyInput=true;
	$scope.companyInputField = function(data) {	
	
	if(data=='yup'){
	$scope.compamyInput=false;
	}else{
	$scope.compamyInput=true;
		}
	}
//-------------- extra input field for File function  ---------
$scope.fileInput=true;
	$scope.fileInputField = function(data) {	
	if(data=='yup'){
	$scope.fileInput=false;
	}else{
	$scope.fileInput=true;
		}
	}
//-------------- extra input field for Location function  ---------
$scope.locationInput=true;
	$scope.locationInputField = function(data) {	
	if(data=='yup'){
	$scope.locationInput=false;
	}else{
	$scope.locationInput=true;
		}
	}
//-------------- extra input field for Color function  ---------
$scope.colorInput=true;
	$scope.colorInputField = function(data) {	
	if(data=='yup'){
	$scope.colorInput=false;
	}else{
	$scope.colorInput=true;
		}
	}
//-------------- extra input field for Start function  ---------
$scope.startInput=true;
	$scope.startInputField = function(data) {	
	if(data=='yup'){
	$scope.startInput=false;
	}else{
	$scope.startInput=true;
		}
	}
//-------------- extra input field for end  function  ---------
$scope.endInput=true;
	$scope.endInputField = function(data) {	
	if(data=='yup'){
	$scope.endInput=false;
	}else{
	$scope.endInput=true;
		}
	}
//-------------- extra input field for checkbox function  ---------
$scope.checkboxInput=true;
	$scope.checkboxInputField = function(data) {	
	if(data=='yup'){
	$scope.checkboxInput=false;
	}else{
	$scope.checkboxInput=true;
		}
	}
//-------------- extra input field for radio function  ---------
$scope.radioInput=true;
	$scope.radioInputField = function(data) {	
	if(data=='yup'){
	$scope.radioInput=false;
	}else{
	$scope.radioInput=true;
		}
	}
//-------------- extra input field for Laptop function  ---------
$scope.laptopInput=true;
	$scope.laptopInputField = function(data) {	
	if(data=='yup'){
	$scope.laptopInput=false;
	}else{
	$scope.laptopInput=true;
		}
	}
//------------- Submit the form -----

$scope.submitForm = function() {


Object.toparams = function ObjecttoParams(obj) {
    var p = [];
    for (var key in obj) {
        p.push(key + '=' + encodeURIComponent(obj[key]));
    }
    return p.join('&');
};
	myobject ={
	'userTitle':$scope.user.title,
	'userPrice':$scope.user.price,
	'userSubmissionDate':$scope.user.submissionDate,
	'userTags':$scope.user.tags,
	'userModel':$scope.user.model,
	'userMake':$scope.user.make,
	'userYear':$scope.user.year,
	'userCompany':$scope.user.company,
	'userLocation':$scope.user.location,
	'userColor':$scope.user.color,
	'userStart':$scope.user.start,
	'userEnd':$scope.user.end,
	'userCheckbox':$scope.user.checkbox,
	'userRadio':$scope.user.radio,
	'userLaptop':$scope.user.laptop
	}; // all veriable 
	
	
	 var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' //form header
                }
            }

   $http({
    method: 'POST', //dtat send with post 
    url: 'form.html', // submit url 
    data: Object.toparams(myobject),
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
})
    .then(function(response) {// optional
        console.log(response);
    }, 
    function(response) { // optional
       console.log(response);
    })
	}
//---------- angular popup function------------	
 $scope.showLeftSidebar = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      contentElement: '#myDialog',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true
    });
  };
 // -------material dialog
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


