$(document).ready(function() {

var tablerow;
var cases = [
"EHBJ8F3MKRP,Kim Scarlett,11/09/2016,8",
"2GD1KK9ZQXD6,Bobby Lamb,07/07/2016,8",
"8VED6P3VUOL9,Devon Dotson,09/07/2016,8",
"YBAN1NGO5R73,Jack Simpson,10/07/2016,8",
"BQSE4LWQ8HPP,Richard Evans,15/07/2016,8",
"2IEZ4RKXOG0E,Jeremy Shannon,16/07/2016,8",
"N4INRYZAOBH5,Robin Massey,17/07/2016,9",
"BWQCZEEP8X67,Sarah Garcia,20/07/2016,9",
"CYH3QRA76SQK,Rita Larsen,22/07/2016,9",
"TE8Q01K639IG,Taylor Shepard,23/07/2016,10",
"XP02HT51GY43,Brian Cooper,24/07/2016,10",
"73AC2RMVJNHQ,Claude Holmes,27/07/2016,11",
"AG916HZI5B25,Bruce Kelley,05/05/2016,11",
"2KJ9MW3ZFI60,Richard Evans,06/08/2016,11",
"M1Y0CPO86ZUQ,Deborah Perez,11/08/2016,8",
"P8S2POL0JWNY,Chester Mitchell,13/08/2016,8",
"TSXHMSZ19ON7,Samuel Neal,17/08/2016,8",
"530060BKIR6R,Erica Bryant,18/08/2016,7",
"DO7KOLIIY6CO,Patrick Harper,21/08/2016,6",
"EHBJ8F3MKRP,Kim Scarlett,11/09/2016,5",
"HZTEDLME20MJ,Daniel Morton,27/08/2016,6",
"HIMFCSDYGARE,Wilma Morris,28/08/2016,5",
"AUBU71T5GF5X,Alexander Carey,31/08/2016,5",
"HVXH2FIYDC8C,Angel Singleton,10/08/2016,5",
"EHBJ8F3MKRP,Kim Scarlett,11/09/2016,2",
"INDQWFSUSXK1,Rex Jordan,17/08/2016,2",
"0JW8RYCS0M0C,Bessie Craig,18/08/2016,2",
"OF85EN6QE9RQ,Luis Hamilton,19/08/2016,2",
"QQPF86B5C2R1,Josephine Turner,20/08/2016,2",
"EHBJ8F3MKRP,Kim Scarlett,11/09/2016,4",
"QO3ULVFGDU2Z,Clifford Murray,24/08/2016,4",
"7ANJ77U1SDE4,Giovanni Thomas,25/08/2016,4",
"EHBJ8F3MKRP,Kim Scarlett,11/09/2016,3",
"HGP0B6F7RS0Q,George Hopper,27/08/2016,3",
"T0FN2FFH6FQ7,Maude Hopkins,28/08/2016,3",
"3UYF2CE20Y8I,Patrick Grant,31/08/2016,3",
"7P5L7W34YK04,Orville Stone,01/09/2016,3",
"PYQH13QC0Y1U,Victoria Hinton,02/09/2016,3",
"F6U7LLGDE2NR,Marsha Hardin,03/09/2016,2",
"HBDUZ8X1LBJR,Oliver Hayes,19/08/2016,2",
"4CJBKRR3HXCC,Janice Key,24/08/2016,2",
"BRU3LE8CE00Z,Kelly Osborn,25/08/2016,2",
"94K9E5PKP2S9,Donnie Dorsey,01/09/2016,2",
"18AXAZZDQC8Y,Walter Hall,02/09/2016,2",
"8PDRSRY1E0HL,Norma Lamb,01/09/2016,2"
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
			var sectiontitle;
			$(".section-wrapper").hide();

			/*sets status*/
			switch (status) {
			case "1":
				statuscolor = '<div class="label label-success"><i class="glyphicon glyphicon-ok"></i></div>';
				sectiontitle= 'New approve cases';
				break;
			case "2":
				statuscolor = '<div class="label label-danger"><i class="glyphicon glyphicon-share-alt"></i></div>';
				sectiontitle = 'New refer cases';
				break;
			case "3":
				statuscolor = '<div class="label label-danger"><i class=\"glyphicon glyphicon-flag\"></i></div>';
				sectiontitle = 'Escalated cases';
				break;
			case "4":
				statuscolor = '<div class="label label-warning"><i class=\"glyphicon glyphicon-flag\"></i></div>';
				sectiontitle = 'Information received';
				break;
			case "5":
				statuscolor = '<div class="label label-warning"><i class="glyphicon glyphicon-time"></i></div>';
				sectiontitle = 'Information requested';
				break;
			case "6":
				statuscolor = '<div class="label label-default"><i class="glyphicon glyphicon-user"></i></div>';
				sectiontitle = 'Review requested';
				break;
			case "7":
				statuscolor = '<div class="label label-default"><i class="glyphicon glyphicon-briefcase"></i></div>';
				sectiontitle = 'On appeal';
				break;
			case "8":
				statuscolor = '<div class="label label-default"><i class="glyphicon glyphicon-file"></i></div>';
				sectiontitle = 'Order made';
				break;
			case "9":
				statuscolor = '<div class="label label-default"><i class="glyphicon glyphicon-info-sign"></i></div>';
				sectiontitle = 'Order refused';
				break;
			case "10":
				statuscolor = '<div class="label label-default"><i class="glyphicon glyphicon-exclamation-sign"></i></div>';
				sectiontitle = 'Review rejected';
				break;
			case "11":
				statuscolor = '<div class="label label-default"><i class="glyphicon glyphicon-remove"></i></div>';
				sectiontitle = 'Appeal rejected';
				break;
			default:
				statuscolor = '<div class="label label-default">&nbsp;</div>';
			}

			$("#section").html(sectiontitle);

			/* Sets flag */
			if(flagged == 'true'){
				flagged = " <i class=\"glyphicon glyphicon-flag\"></i>";
			}
			else{
				flagged="";
			}



		    if(name == "Kim Scarlett" && (status == 2||status == 3)){
					tablerow = '<a href="refer.html" class="section-wrapper">';
					tablerow += '<section class=\"application\">';
					tablerow += '<div class=\"row\">';
					tablerow += '<div class=\"col-md-4 col-sm-4 col-xs-12\">';
		    	tablerow += '<h2 class=\"heading-medium\">' + urn + '</h2>';
		    }
		    else if(name == "Kim Scarlett" && (status == 4)){
					tablerow = '<a href="refer.html" class="new-wrapper">';
					tablerow += '<section class=\"application\">';
					tablerow += '<div class=\"row\">';
					tablerow += '<div class=\"col-md-4 col-sm-4 col-xs-12\">';
		    	tablerow += '<h2 class=\"heading-medium\">' + urn + '</h2>';
		    }
		    else if(name == "Kim Scarlett" && (status == 5)){
					tablerow = '<a href="information.html" class="new-wrapper">';
					tablerow += '<section class=\"application\">';
					tablerow += '<div class=\"row\">';
					tablerow += '<div class=\"col-md-4 col-sm-4 col-xs-12\">';
		    	tablerow += '<h2 class=\"heading-medium\">' + urn + '</h2>';
		    }
		    else if(name == "Kim Scarlett" && (status == 8)){
					tablerow = '<a href="ordermade.html" class="new-wrapper">';
					tablerow += '<section class=\"application\">';
					tablerow += '<div class=\"row\">';
					tablerow += '<div class=\"col-md-4 col-sm-4 col-xs-12\">';
		    	tablerow += '<h2 class=\"heading-medium\">' + urn + '</h2>';
		    }

		    else{
					tablerow = '<a href="approve.html" class="new-wrapper">';
					tablerow += '<section class=\"application\">';
					tablerow += '<div class=\"row\">';
					tablerow += '<div class=\"col-md-4 col-sm-4 col-xs-12\">';
		    	tablerow += '<h2 class=\"heading-medium\">' + urn + '</h2>';
		    }
				tablerow += '</div>';
				tablerow += '<div class=\"col-md-4 col-sm-4 col-xs-12\">';
				tablerow += '<h3><span class=\"form-hint\">Applicant:</span> ' + name + '</h3>';
				tablerow += '</div>';
				tablerow += '<div class=\"col-md-4 col-sm-4 col-xs-12\">';
				tablerow += '<h4><span class=\"form-hint\">Received:</span> ' + date + '</h4>';
				tablerow += '</div>';
				tablerow += '</div>';
				tablerow += '</section>';
				tablerow += statuscolor;
				tablerow +='</a>';

				$("#application-list").append(tablerow);


		}
	}

$("#application-list").tablesorter({widthFixed: true, widgets: ['zebra']}).tablesorterPager({container: $("#pager")});

});
