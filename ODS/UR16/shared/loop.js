$(document).ready(function() {
	var loop = getParameterByName("loop");

	if (loop && loop.length > 0){

		$(".repeat").show();
		$(".firsttime").hide();
	}
	else{
		$(".firsttime").show();
		$(".repeat").hide();
	}

});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
