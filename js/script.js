// Element de menu actif actuellement
var current_item = 0;

// Quelques paramètres
var section_hide_time = 1300;
var section_show_time = 1300;


// Elements de jQuery 
jQuery(document).ready(function($) {

	// Section de remplacement
	$("a", '.mainmenu').click(function() 
	{
		if( ! $(this).hasClass('active') ) { 
			current_item = this;
			// Fermer tous les div visibles avec la classe .section quand on clique sur un onglet ouvrant une "page"
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		return false;
	});		
});

// Wrap every letter in a span
var textWrapper = document.querySelector('.textanim');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.textanim .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.textanim',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
