$(document).ready(function() {
   
var addresses =   [
{ line1: '274 Lesborne Road', line2: '', line3:'', town:'Reigate', county:'Surrey', postcode: 'RH2 7JP' },
{ line1: 'Walton House 56-58', line2: 'Richmond Hill', line3:'', town:'Bournemouth', county:'', postcode: 'BH2 6EX'},

];
 
    
    // constructs the suggestion engine
var addresses = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: addresses
});
 
// kicks off the loading/processing of `local` and `prefetch`
addresses.initialize();

$("#pnl-creditor").hide();
$("#pnl-add").hide();
$("#row-total").hide();
$("#row-0").hide();

$("#row-1").hide();
$("#row-2").hide();
$("#row-3").hide();
$("#row-4").hide();
$("#row-5").hide();
$("#row-6").hide();
$("#row-7").hide();
$("#row-8").hide();
$("#row-9").hide();
 
var creditortypeahead = $('#propertyname.typeahead');
	creditortypeahead.typeahead({
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
	$("#add").prop("href", "amount.html");

};

creditortypeahead.on('typeahead:selected', addresseselectedHandler );

$("#propertyname").on("change", function () {
	$("#add").prop("href", defaultnext);

	if (creditortypeahead.typeahead('val') == ""){
	    /*$("#pnl-name").text("");
    	$("#pnl-address").text("");
    	$("#pnl-creditor").hide();*/
	}
});



$("#btn-clear").on("click", function(){
		clearfilter();
		$("#propertyname").focus();
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
	creditortypeahead.typeahead('val', '');
/*	    $("#pnl-name").text("");
    	$("#pnl-address").text("");
    	$("#pnl-creditor").hide();*/
}

});