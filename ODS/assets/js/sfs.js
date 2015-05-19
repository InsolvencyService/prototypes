$(document).ready(function() {

	$("tr input").first().focus();

	$("input").on("change", function(e){
		e.preventDefault();
		totalamount = 0;

		$('tr td input.amount').each(function(){
		    var listfrequency = $(this).parent().next().find("select");
		    //alert($(this).val() + " " + $(this).parent().next().find("select").val());
			if ($(this).val()){
				var amt = $(this).val();
				if (listfrequency.val() == "week"){
					totalamount+= (tonum(amt) * 52) / 12;
				}
				if (listfrequency.val() == "year"){
					totalamount+= tonum(amt) / 12;
				}
				if (listfrequency.val() == "month"){
					totalamount+= tonum(amt);
				}
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
