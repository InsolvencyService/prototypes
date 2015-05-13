$(document).ready(function() {

	$("tr input").first().focus();

	$("input").on("change", function(e){
		e.preventDefault();
		totalamount = 0;

		$('tr input.amount').each(function(){
			if ($(this).val()){
				var amt = $(this).val();
				totalamount+= tonum(amt);
			}
		});
		if (totalamount && totalamount > 0){
			$("#box-total").text(totalamount.toFixed(2));

		}

	});

	
	function tonum(num)
	{
	 	return parseFloat(num); //.replace(/[^0-9\.]+/g,"")
	}

});
