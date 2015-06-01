$(document).ready(function () {

    function calctotal() {
        var totalamount = 0;
        $('tr td input.amount').each(function () {
            var listfrequency = $(this).parent().next().find("select");
            if ($(this).val()) {
                var amt = $(this).val();
                totalamount = totalamount + normalise(parseFloat(amt), listfrequency.val());
                $(this).val(parseFloat(amt).toFixed(2));
            }
        });
        return totalamount;
    }

    var summaryurl = $("#next").prop("href");
    var addnum = 0;
    if (summaryurl.indexOf("&") <= 0) {
        summaryurl = $(".form-hint > a").prop("href");
        addnum = 1;
    }
    var thispage = 1;
    var stage = "income";

    if (summaryurl && summaryurl.indexOf("&") > 0) {
        thispage = parseInt(summaryurl.match(/(\d+)$/)[0], 10) + addnum;
        stage = summaryurl.substring(summaryurl.indexOf("=") + 1, summaryurl.lastIndexOf("&"));
    }
    var total = 0;
    var amountitem = stage + thispage + "-value";
    var amountfreq = stage + thispage + "-frequency";
    var count = 1;
    var countitems = $('tr td input.amount').length;

    $('tr td input.amount').each(function () {
        var listfrequency = $(this).parent().next().find("select");

        if ($.cookie(amountitem + count) && $.cookie(amountitem + count).length > 0) {
            var amount = $.cookie(amountitem + count);
            $(this).val(parseFloat(amount).toFixed(2));
            var frequency = "month";
            if ($.cookie(amountfreq + count) && $.cookie(amountfreq + count).length > 0) {
                frequency = $.cookie(amountfreq + count);
            }
            listfrequency.val(frequency);

            if (parseFloat(amount)) {
                total = total + normalise(parseFloat(amount),frequency);
            }
            //alert(amountitem + count + " - " + amount + " / " + amountfreq + count + " - " + frequency);
        }
        count += 1;
    });
    if (total && total > 0) {
        $("#box-total").text(total.toFixed(2));
    }



	//$("tr select").first().keydown();
	$("tr input").first().focus();
	
	$("input").on("change", function(e){
	    var total = calctotal();

		if (total && total > 0){
			$("#box-total").text(total.toFixed(2));
		}
	});
	$("select.select-control").on("change", function (e) {
	    var total = calctotal();

	    if (total && total > 0) {
	        $("#box-total").text(total.toFixed(2));
	    }
	});


	$("#next").on("click", function () {
	    var i = 1;
	    var totalamount = 0;

	    $('tr td input.amount').each(function () {
	        var listfrequency = $(this).parent().next().find("select");
	        if ($(this).val()) {
	            var amt = $(this).val();

	            $.cookie(stage + thispage + "-value" + i, parseFloat(amt), { expires: 1});
	            $.cookie(stage + thispage + "-frequency" + i, listfrequency.val(), { expires: 1 });
	            totalamount = totalamount + normalise(parseFloat(amt), listfrequency.val());

	            //alert(stage + thispage + "-value" + i + " - " + amt);
	        }
	        i += 1;
	    });
	    if (totalamount && totalamount > 0) {
	        $.cookie(stage + thispage, totalamount, { expires: 1 });
	        //alert(stage + thispage + " - " + totalamount);
	    }




	});
	


	function normalise(amt, frequency) {
	    var normalisedamount = 0;
	    if (frequency == "week") {
	        normalisedamount = (tonum(amt) * 52) / 12;
	    }
	    if (frequency == "year") {
	        normalisedamount = tonum(amt) / 12;
	    }
	    if (frequency == "month") {
	        normalisedamount = tonum(amt);
	    }
	    return normalisedamount;
	}

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

});
