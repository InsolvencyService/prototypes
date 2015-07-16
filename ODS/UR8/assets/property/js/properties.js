$(document).ready(function() {
   
var addresses =   [
{ icon: 'glyphicon-star', address: '274 Lesborne Road, Reigate, Surrey, RH2 7JP', value: 'Goods Abundant Ltd' },
{ icon: 'glyphicon-star', address: 'Walton House 56-58, Richmond Hill, Bournemouth, BH2 6EX', value: 'ABC Company' },

{ icon: '', address: '1 The Place, Churchtown, Redhill, AB1 2JH', value: '1 The Place, AB1 2JH' }

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