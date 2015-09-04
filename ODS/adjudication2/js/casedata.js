$(document).ready(function() {

var tablerow;
var cases = [
"B52S-FQ6Y-HQWP,New Approve,2015-03-24,1",
"A56S-E889-WW5E,New Refer,2015-03-31,2",
"A56S-E889-WW5E,Escalated,2015-03-31,3",
"A56S-E889-WW5E,Another Escalated,2015-03-31,3",
"A56S-E889-WW5E,Information Received,2015-03-31,4",
"A56S-E889-WW5E,Awaiting Further Information,2015-03-31,5",
"A56S-E889-WW5E,Review Requested,2015-03-31,6",
"A56S-E889-WW5E,On Appeal,2015-03-31,7",
"A56S-E889-WW5E,Order made,2015-03-31,8",
"A56S-E889-WW5E,Refused,2015-03-31,9",
"A56S-E889-WW5E,Review Rejected,2015-03-31,10",
"A56S-E889-WW5E,Appeal refused,2015-03-31,11"

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
			alert(statuscolor);
			
			
			
			/* Sets flag */
			if(flagged == 'true'){
				flagged = " <i class=\"glyphicon glyphicon-flag\"></i>";
			}
			else{
				flagged="";
			}
			
			
			
		    tablerow = '<tr>';
		    tablerow += '<td><a href="detail.html?urn='+urn+'">'+urn+'</a></td>';
		    tablerow += '<td><a href="detail.html?urn='+urn+'">'+name+'</a></td>';
		    tablerow += '<td><a href="detail.html?urn='+urn+'">'+date+'</a></td>';
			tablerow += '<td class="text-center"><a href="detail.html?urn='+urn+'">'+statuscolor+'</a></td>'
			tablerow +='</tr>';
			alert(tablerow);
			$("#tbody").append(tablerow);
		}	    
	}


});