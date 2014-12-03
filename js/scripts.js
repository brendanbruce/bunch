$( document ).ready(function() {
//init variables
var initRGBA = "rgba(0,0,0,0.3)";
var initMonth = "10%";
var initDay = "50%";
var initSlash = 1.0;

var hoverRGBA = "rgba(0,0,0,0.0)";
var hoverMonth = "-50%";
var hoverDay = "120%";
var hoverSlash = 0.0;


    $( ".roundup-img-area" ).mouseenter(function() {
    	var target = this;
    	console.log(target);
    	$(this).find( '.roundup-info' ).animate({ backgroundColor: hoverRGBA });
    	$(this).find( '.month' ).animate({ top: hoverMonth });
		$(this).find( '.day' ).animate({ top: hoverDay });
		$(this).find( '.slash' ).fadeTo("fast", hoverSlash);
    });


    $( ".roundup-img-area" ).mouseleave(function() {
    	$(this).find( '.roundup-info' ).animate({ backgroundColor: initRGBA });
    	$(this).find( '.month' ).animate({ top: initMonth });
		$(this).find( '.day' ).animate({ top: initDay });
		$(this).find( '.slash' ).fadeTo("fast", initSlash);
    });
});