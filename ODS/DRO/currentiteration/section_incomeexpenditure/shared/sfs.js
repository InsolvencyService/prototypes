$(document).ready(function () {



    function calctotal() {
        var totalamount = 0;
        $('tr td input.amount').each(function () {
           
            if ($(this).val()) {
                var amt = numberWithoutCommas($(this).val());
                totalamount = totalamount + amt;
                $(this).val(parseFloat(amt));
            }
        });
        return totalamount;
    }

    var total = 0;
  
    if (total && total > 0) {
        $("#box-total").text(toDecimal(total));
    }
	$("tr input").first().focus();
	
	
	$("input").on("change", function(e){
	    var total = calctotal();

		if (total && total > 0){
			$("#box-total").text(parseFloat(total).toFixed(2));
		}
	});
	$("select.select-control").on("change", function (e) {
	    var total = calctotal();

	    if (total && total > 0) {
	        $("#box-total").text(parseFloat(total).toFixed(2));
	     }
	});


	$("#next").on("click", function () {
	    var i = 1;
	    var totalamount = 0;
		var type = getParameterByName("type");
	    $('tr td input.amount').each(function () {
	       
	        if ($(this).val()) {
	            var amt = $(this).val();
	            

	            $.cookie(type+"-value" + i, parseFloat(amt), { expires: 1});
	           
	            totalamount = totalamount + amt;

	           
	        }
	        i += 1;
	    });
	    if (totalamount && totalamount > 0) {
	        $.cookie(type+"-total", totalamount, { expires: 1 });
	        
	    }
	    else{
	    	$.cookie(type+"-total", "0", { expires: 1 });
	    }




	});
	


	

	function tonum(num)
	{
	 	return parseFloat(num); //.replace(/[^0-9\.]+/g,"")
	}

			$(".addanother").hide();
			$("#btn-addanother").on("click", function(){
				$(".addanother").show().find("input").first().focus();
				 $('html, body').animate({
                        scrollTop: $(".addanother").offset().top
                    }, 2000);

			});


			function toDecimal(num) {
			    var n1 = parseFloat(num);
			    if (n1 % 1 != 0) {
			        n1 = n1.toFixed(2);
			        var n2 = parseFloat(num.toFixed(1));

			        if (n1.toString().substring(n1.toString().length - 1) == '0') {
			            n1 = n2;
			        }
			    }

			    return n1;
			}
});

function numberWithoutCommas(x) {
    return parseFloat(x.toString().replace(/,/g, ""));
}