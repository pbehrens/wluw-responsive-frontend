soundcloud.addEventListener('onPlayerReady', function(player, data) {
  player.api_play();
});
   
var jplayerswf = "http://www.loyolaphoenix.com/wp-content/plugins/haiku-minimalist-audio-player/js/";


(function($) {
	$(document).ready(function() { 

		$('a[href=#top]').click(function(){
			$('html, body').animate({scrollTop:0}, 'slow');
			return false;
		});

		$("a[rel=gab_gallery]").fancybox({
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'titlePosition' 	: 'over',
			'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
				return '<span id="fancybox-title-over">' + title /* + ' ('+(currentIndex + 1) + ' / ' + currentArray.length + ')' */ +'</span>';
			}
		});			

		$(".show").fancybox({  
			'titleShow'     : 'false',  
			'transitionIn'      : 'fade',  
			'transitionOut'     : 'fade'  
		});

		$(".iframe").fancybox({	
			'width'	: '75%',
			'height' : '75%',
			'autoScale'     	: false,
			'transitionIn'		: 'none',
			'transitionOut'		: 'none',
			'type'				: 'iframe'
		});
						$('#featured-slider .fea-slides').cycle({ 
				pauseOnPagerHover: 1,
				prev:   '.fea_prev',
				next:   '.fea_next',
				pauseOnPagerHover: 1,
				fx:     'fade',
				timeout: '15000',
				speed: '1000',
				pager:  '#featured-nav', 
				pagerAnchorBuilder: function(idx, slide) { 
					// return selector string for existing anchor 
					return '#featured-nav li:eq(' + idx + ') a'; 
				} 
			});

			$('#video-slider .fea-slides').cycle({ 
				pauseOnPagerHover: 1,
				prev:   '.vid_prev',
				next:   '.vid_next',
				pager:  '#vid-nav', 
				fx:     'fade',
				timeout: 0
			});

			$('#mid-slider .fea-slides').cycle({ 
				fx:     'fade', 
				timeout: 0,
				prev:   '.media_prev',
				next:   '.media_next',
				pauseOnPagerHover: 1,
				pager:  '#mid-slider-pagination', 
				pagerAnchorBuilder: function(idx, slide) { 
					// return selector string for existing anchor 
					return '#mid-slider-pagination li:eq(' + idx + ') a'; 
				} 
			});					

		$("ul.tabs").tabs("div.panes > div");

	});
})(jQuery);



$(function() {
    $('.time-slot-link').click(function() {
        var clickedLink = $(this);
        var myClass = $(this).attr("id");
        var panel = "#" + myClass + "-panel";
        console.log(panel);
        // if(!$(this).hasClass("time-slot-chosen")){
        //     $(this).addClass("time-slot-chosen");
        // }
        $('#spots-by-hour').children().removeClass('time-slot-chosen');
      
        if($(panel).is(":hidden")){
            $('#spot-list').children().hide();
            $(panel).show();
            $(clickedLink).addClass("time-slot-chosen");
        }
        return false;
    });
});