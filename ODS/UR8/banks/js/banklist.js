$(document).ready(function() {
   
var bank = 	[
			{sort:'401928', bank:'HSBC', address:'High St, Dudley, West Midlands, DY4 9PR'},
			{sort: '000000', bank: 'INSS', address: 'Colmore Row, Birmingham, B1 3RG'}
];

var sortcode = $.cookie("bank_sortcode");

$.map(bank, function(a) {
	if(a.sort==sortcode){
		$("#sort_code").val(a.sort);
		$("#bank").val(a.bank);
		$("#address").val(a.address);
	}	
});


});	

