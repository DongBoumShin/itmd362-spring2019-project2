/* 
   Javascript Program to add functionality to homepage.    
   Programmers: Daniel Callegari, Dongboum Shin, Jacob Huebner
   Date created: 4/5/2019
   Date modified: 4/5/2019
   File Name: index_script.js
*/

// Runs when the document starts
$(document).ready(function() {
  
});


// Toggles nav menu dropdown
$("#menu").click(function() {
  $("#navbars").slideToggle();
});

// Enables navbar when screen is bigger than 960px
$(window).resize(function(){
	if ($(window).width() >= 960){	
		$('#navbars').show();
	}	
});