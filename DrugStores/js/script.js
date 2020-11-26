var x, xmlhttp, xmlDoc;

xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "data.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML; 
rows = xmlDoc.getElementsByTagName("row");
var table=document.getElementById("myTable").innerHTML;

for (i = 1; i <rows.length; i++) { 

  table += "<tr><td>";
  table += rows[i].getElementsByTagName("data")[0].childNodes[0].nodeValue;
  table += "</td><td>";     
  table +=  rows[i].getElementsByTagName("data")[1].childNodes[0].nodeValue;
  table += "</td><td>";
  table +=  rows[i].getElementsByTagName("data")[2].childNodes[0].nodeValue;
  table += "</td><td>";
  table +=  rows[i].getElementsByTagName("data")[3].childNodes[0].nodeValue;
  table += "</td><td>";
  table +=  rows[i].getElementsByTagName("data")[4].childNodes[0].nodeValue;
  table += "</td></tr>";
}
document.getElementById("myTable").innerHTML = table;

$(document).ready(function() {
    $('#myTable').DataTable( {
    "pagingType": "full_numbers"
    } );
    } );

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
