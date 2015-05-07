/**
 *	PROJECT			:		SmartGirl
 *	Developer		:		Glean Team
 *	Date			:		07-May-2015
 */
 
$( function() {
	var smartgirl = {
		init: function() {
			this.toggleMenu();
		},
		
		toggleMenu: function() {
			$('nav .menu').click( function() {
				$('nav ul').slideToggle( 200 );
			});
		}
	}
	
	$( document ).ready( function() {
		smartgirl.init();
	});
});