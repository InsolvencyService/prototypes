$(document).ready(function() {

var tablerow;
var cases = [
"5OMQETGNFXQR,Wilbert Aguirre,2015-07-01,8",
"2GD1KK9ZQXD6,Bobby Lamb,2015-07-07,8",
"8VED6P3VUOL9,Devon Dotson,2015-07-09,8",
"YBAN1NGO5R73,Jack Simpson,2015-07-10,8",
"BQSE4LWQ8HPP,Richard Evans,2015-07-15,8",
"2IEZ4RKXOG0E,Jeremy Shannon,2015-07-16,8",
"N4INRYZAOBH5,Robin Massey,2015-07-17,9",
"BWQCZEEP8X67,Sarah Garcia,2015-07-20,9",
"CYH3QRA76SQK,Rita Larsen,2015-07-22,9",
"TE8Q01K639IG,Taylor Shepard,2015-07-23,10",
"XP02HT51GY43,Brian Cooper,2015-07-24,10",
"73AC2RMVJNHQ,Claude Holmes,2015-07-27,11",
"AG916HZI5B25,Bruce Kelley,2015-08-05,11",
"2KJ9MW3ZFI60,Richard Evans,2015-08-06,11",
"M1Y0CPO86ZUQ,Deborah Perez,2015-08-11,8",
"P8S2POL0JWNY,Chester Mitchell,2015-08-13,8",
"TSXHMSZ19ON7,Samuel Neal,2015-08-17,8",
"530060BKIR6R,Erica Bryant,2015-08-18,7",
"DO7KOLIIY6CO,Patrick Harper,2015-08-21,6",
"AQW8YFLKCHQZ,Christine Coffey,2015-08-26,5",
"HZTEDLME20MJ,Daniel Morton,2015-08-27,6",
"HIMFCSDYGARE,Wilma Morris,2015-08-28,5",
"AUBU71T5GF5X,Alexander Carey,2015-08-31,5",
"HVXH2FIYDC8C,Angel Singleton,2015-08-10,5",
"EHBJ8F3MKRP,Kim Scarlett,2015-09-11,2",
"INDQWFSUSXK1,Rex Jordan,2015-08-17,2",
"0JW8RYCS0M0C,Bessie Craig,2015-08-18,2",
"OF85EN6QE9RQ,Luis Hamilton,2015-08-19,2",
"QQPF86B5C2R1,Josephine Turner,2015-08-20,2",
"UFM75Q94Z556,Jordan Boyd,2015-08-21,4",
"QO3ULVFGDU2Z,Clifford Murray,2015-08-24,4",
"7ANJ77U1SDE4,Giovanni Thomas,2015-08-25,4",
"2W19SS2S4O7Q,Margaret Fuller,2015-08-26,3",
"HGP0B6F7RS0Q,George Hopper,2015-08-27,3",
"T0FN2FFH6FQ7,Maude Hopkins,2015-08-28,3",
"3UYF2CE20Y8I,Patrick Grant,2015-08-31,3",
"7P5L7W34YK04,Orville Stone,2015-09-01,3",
"PYQH13QC0Y1U,Victoria Hinton,2015-09-02,3",
"F6U7LLGDE2NR,Marsha Hardin,2015-09-03,2",
"HBDUZ8X1LBJR,Oliver Hayes,2015-08-19,2",
"4CJBKRR3HXCC,Janice Key,2015-08-24,2",
"BRU3LE8CE00Z,Kelly Osborn,2015-08-25,2",
"94K9E5PKP2S9,Donnie Dorsey,2015-09-01,2",
"18AXAZZDQC8Y,Walter Hall,2015-09-02,2",
"8PDRSRY1E0HL,Norma Lamb,2015-09-01,2"
];

var tarr = new Array;


for (i = 0; i < cases.length; i++) {
	
	tarr = cases[i].split(',');
	var urn, name, date, status, fagged;
				
			urn = tarr[0];
			name = tarr[1];
			date = tarr[2];
			status = tarr[3];
			flagged = tarr[4];
	

	//alert(status);
		
		
		if(status == filter){
			var statuscolor = "test" ;
			$(".activerow").hide();
						
			/*sets status*/
			switch (status) {
			case "1":
				statuscolor = '<span class="label label-success">&nbsp;</span>';
				break;	
			case "2":
				statuscolor = '<span class="label label-danger">&nbsp;</span>';
				break;
			case "3":
				statuscolor = '<span class="label label-danger">&nbsp;</span>&nbsp;<i class=\"glyphicon glyphicon-flag\"></i>';
				break;	
			case "4":
				statuscolor = '<span class="label label-warning">&nbsp;</span>&nbsp;<i class=\"glyphicon glyphicon-flag\"></i>';
				break;	
			case "5":
				statuscolor = '<span class="label label-warning">&nbsp;</span>';
				break;
			default:
				statuscolor = '<span class="label label-default">&nbsp;</span>';				
			}	
		
			
			
			/* Sets flag */
			if(flagged == 'true'){
				flagged = " <i class=\"glyphicon glyphicon-flag\"></i>";
			}
			else{
				flagged="";
			}
			
			
			
		    tablerow = '<tr class="tablerow">';
		    tablerow += '<td>'+urn+'</td>';
		    tablerow += '<td>'+name+'</td>';
		    tablerow += '<td>'+date+'</td>';
			tablerow += '<td class="text-center">'+statuscolor+'</td>'
			tablerow +='</tr>';
			
			$("#table").append(tablerow);
			
			
		}	    
	}
 
$("table").tablesorter({widthFixed: true, widgets: ['zebra']}).tablesorterPager({container: $("#pager")});

});