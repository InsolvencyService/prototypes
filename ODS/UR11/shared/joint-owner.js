$(document).ready(function() {

    var firstname = $.cookie("partner-firstname");
    var lastname = $.cookie("partner-lastname");
var addresses =   [
{ icon: 'glyphicon-star', firstname: 'Susan', value: 'Susan Smith', lastname: 'Smith' },
{ icon: 'glyphicon-star', firstname: 'James', value: 'James Smith', lastname: 'Smith' },

{ icon: '', firstname: firstname, value: firstname + " " + lastname, lastname: lastname }

];
 
var firstname= "";
var lasstname= "";
    
// constructs the suggestion engine
var addresses = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: addresses
});
 
// kicks off the loading/processing of `local` and `prefetch`
addresses.initialize();

var typeaheadfirstline = $('#firstname1').typeahead({
	  hint: true,
	  highlight: true,
	  minLength: 1
	},
	{
	  name: 'addresses',
	  displayKey: 'firstname',
	  // `ttAdapter` wraps the suggestion engine in an adapter that
	  // is compatible with the typeahead jQuery plugin
	  source: addresses.ttAdapter()
	});

var foundmatch = false;

var addresseselectedHandler = function (eventObject, suggestionObject, suggestionDataset) {
    // add handler for add to override the click
    foundmatch = true;
 
    $("#next").removeClass("unknown-owner");
    $(this).closest(".joint-owner").find("input.lastname").val(suggestionObject.lastname);
};

typeaheadfirstline.on('typeahead:selected', addresseselectedHandler );

$(".joint-owner input").on("change", function () {
	$("#next").addClass("unknown-owner");
	if (typeaheadfirstline.typeahead('val') == "") {
	    $(this).closest(".joint-owner").find("input").val('');
	}
	if ($(this).hasClass("firstname")){
	    firstname = $(this).val();
	    if (firstname && firstname.length > 1) {
	        $.cookie('sharedfirstname', firstname, { expires: 1, path: '/' });
	    }
	}
	if ($(this).hasClass("lastname")){
	    lastname = $(this).val();
	    if (lastname && lastname.length > 1) {
	        $.cookie('sharedlastname', lastname, { expires: 1, path: '/' });
	    }
	}
});



$("#btn-clear").on("click", function(){
		clearfilter();
		$(".typeahead").first().focus();
});

//$("#mext").on("click", function () {
//    if (firstname.length > 0) {
//        $.cookie('sharedfirstname', firstname, { expires: 1, path: '/' });
//        $.cookie('sharedlastname', lastname, { expires: 1, path: '/' });
//    }

//});

function clearfilter(){
	typeaheadfirstline.typeahead('val', '');

}

});