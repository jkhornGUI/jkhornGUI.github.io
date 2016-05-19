/**
* File: smoothscrolling.js
* Auhtor: Jerra Khorn, jkhorn1@gmail.com
* Created: May 19, 2016	5:00PM
***/

/* 
 * Use jQuery to add smooth scrolling
 * Reference: http://www.w3schools.com/bootstrap/bootstrap_theme_band.asp#band
 */

 /*
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 600, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });
  });
});
*/

/* 
 * Use jQuery to add smooth scrolling
 * Reference: http://www.w3schools.com/bootstrap/bootstrap_theme_band.asp#band
 */

var smoothScroll = function() {
	// Add smooth scrolling to all links in navbar + footer link
	$(".navbar a, footer a[href='#myPage']").on('click', function(event) {

	// Prevent default anchor click behavior
	event.preventDefault();

	// Store hash
	var hash = this.hash;

	// Using jQuery's animate() method to add smooth page scroll
	// The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
	$('html, body').animate({
		scrollTop: $(hash).offset().top
	}, 600, function(){

		// Add hash (#) to URL when done scrolling (default click behavior)
		window.location.hash = hash;
		});
	};
};