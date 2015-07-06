$(document).ready(function() {
   
var bank =   [
{sort: '401928', bank: 'HSBC', address: 'High St, Dudley, West Midlands, DY4 9PR'},
{sort: '000000', bank: 'INSS', address: 'Colmore Row, Birmingham, B1 3RG'}

];
});

$.each(bank, function( key, value ) {
	alert( key + ": " + value );
});	

