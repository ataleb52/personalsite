$(document).ready(function() {
	/*****ISOTOPE*****/
	$(window).load(function() {
	 	// init Isotope
	 	var $container = $('.isotope').isotope({
	    	itemSelector: '.element-item',
			layoutMode: 'fitRows',
		});
		// filter functions
		var filterFns = {
	    	// show if number is greater than 50
		};
		// bind filter button click
		$('#filters').on( 'click', 'li', function() {
	    	var filterValue = $( this ).attr('data-filter');
				// use filterFn if matches value
				filterValue = filterFns[ filterValue ] || filterValue;
				$container.isotope({ filter: filterValue });
		});
	});
	
	/*****MAGNIFICANT POPUP*****/
	/*
$('.grid-wrapper').magnificPopup({
	  delegate: 'a.popup',
	  type: 'image',
	  gallery:{
		enabled:true
	  }
	});	
*/




});