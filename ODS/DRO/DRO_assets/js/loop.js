$(document).ready(function() {
	var loop = getParameterByName("loop");

	if (loop && loop.length > 0){

		$(".loop").show();
		//$(".repeat").show();
		$(".firsttime").show();
		$(".repeat").hide();
	}
	else{
		$(".firsttime").show();
		$(".loop").hide();
		$(".repeat").hide();

	}

});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
