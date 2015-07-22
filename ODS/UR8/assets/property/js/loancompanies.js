$(document).ready(function() {
   
var addresses =   [
{ icon: 'glyphicon-star', address: '274 Lesborne Road, Reigate, Surrey, RH2 7JP', value: 'Goods Abundant Ltd', postcode: 'AB1 2JH' },
{ icon: 'glyphicon-star', address: 'Walton House 56-58, Richmond Hill, Bournemouth, BH2 6EX', value: 'ABC Company', postcode: 'AB1 2JH' },

{ icon: '', address: '1 The Place, Churchtown, Redhill, AB1 2JH', value: '1 The Place', postcode: 'AB1 2JH' }

];
 
    
// constructs the suggestion engine
var addresses = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: addresses
});
 
// kicks off the loading/processing of `local` and `prefetch`
addresses.initialize();

var typeaheadfirstline = $('#name.typeahead');
	typeaheadfirstline.typeahead({
	  hint: true,
	  highlight: true,
	  minLength: 1
	},
	{
	  name: 'addresses',
	  displayKey: 'value',
	  // `ttAdapter` wraps the suggestion engine in an adapter that
	  // is compatible with the typeahead jQuery plugin
	  source: addresses.ttAdapter()
	});
var defaultnext = $("#add").prop("href");

var addresseselectedHandler = function (eventObject, suggestionObject, suggestionDataset) {
	//$("#add").prop("href", "amount.html");
	$("#postcode").val(suggestionObject.postcode);
};

typeaheadfirstline.on('typeahead:selected', addresseselectedHandler );

$("#name").on("change", function () {
	$("#add").prop("href", defaultnext);

	if (typeaheadfirstline.typeahead('val') == "") {
	    $("#postcode").val('');
	}

});



$("#btn-clear").on("click", function(){
		clearfilter();
		$(".typeahead").first().focus();
});


function updatetotal()
{
	var totalamount= 0;
	$('td.amt').each(function(){
		if ($(this).text() && $(this).is(":visible")){
			var amt = $(this).text();
			totalamount+= parseFloat(amt);
		}
	});
	$("#total-amt").text(totalamount);
}

function clearfilter(){
	typeaheadfirstline.typeahead('val', '');

}

});