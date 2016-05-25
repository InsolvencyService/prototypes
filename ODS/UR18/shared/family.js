$(document).ready(function() {

    var firstname = $.cookie("partner-firstname");
    var lastname = $.cookie("partner-lastname");
var addresses =   [
{ icon: 'glyphicon-star', firstname: 'Susan', value: 'Susan Smith', lastname: 'Smith' },
{ icon: 'glyphicon-star', firstname: 'James', value: 'James Smith', lastname: 'Smith' },

{ icon: '', firstname: firstname, value: firstname + " " + lastname, lastname: lastname }

];
 
    
// constructs the suggestion engine
var addresses = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: addresses
});
 
// kicks off the loading/processing of `local` and `prefetch`
addresses.initialize();

var typeaheadfirstline = $('#firstname.typeahead');
	typeaheadfirstline.typeahead({
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
var defaultnext = $("#add").prop("href");
var foundmatch = false;

var addresseselectedHandler = function (eventObject, suggestionObject, suggestionDataset) {
    // add handler for add to override the click
    foundmatch = true;
    $("#add").on("click", function (e) {
        if (foundmatch) {
            e.preventDefault();
            // show the known person
            $(".repeat").show();
            $(".firsttime").hide();
            $(".known").show();
            clearfilter();
            $("#lastname").val("");
            $(".typeahead").first().focus();
            foundmatch = false; // don't keep running this
        }
    });
    $("#next").removeClass("unknown-owner");
	$("#lastname").val(suggestionObject.lastname);
};

typeaheadfirstline.on('typeahead:selected', addresseselectedHandler );

$("#firstname").on("change", function () {
	$("#add").prop("href", defaultnext);
	$("#next").addClass("unknown-owner");
	if (typeaheadfirstline.typeahead('val') == "") {
	    $("#firstname").val('');
	}

});



$("#btn-clear").on("click", function(){
		clearfilter();
		$(".typeahead").first().focus();
});



function clearfilter(){
	typeaheadfirstline.typeahead('val', '');

}

});