var spacerInPlace = null;
var spotlightInLight = null;
var spotSlot = null;
if($(window).width <= 480){
	spacerInPlace = false;¬l
	spotlightInLight = false;
	$("#nav-spacer").remove();
	spotSlot = $("#spotlight").detach();
}
else{
	spacerInPlace = true;
	spotlightInLight = true;
}

$(window).resize(function() {
		if($(window).width() <= 480) {
			player = $('#streaming-player').detach();
			player.removeClass('col-xs-4 ').addClass('col-xs-12').addClass('col-centered');
			player.wrap('<div class="row"></div>');
			$("header").append(player);
			if(spacerInPlace == true){
				$("#nav-spacer").remove();
				spacerInPlace = false;
			}
			if(spotlightInLight == true){
				spotSlot = $("#spotlight").detach();
				spotlightInLight = false;
			}
		}
		else if($(window).width() > 480){
			player = $('#streaming-player').detach();
			player.removeClass('col-xs-12').removeClass('col-centered').addClass('col-xs-4');
			player.insertBefore("#header-logo");
			console.log($("#nav-spacer").length);
			if(spacerInPlace == false){
				console.log($("#nav-spacer").length);
				$("#navigation").parent().prepend('<div id="nav-spacer" class="col-xs-3 col-sm-3  col-md-3 col-lg-3"></div>');
				spacerInPlace = true;
			}
			
			if(spotlightInLight == false){
				$("#spotlight-column").prepend(spotSlot);
				spotlightInLight = true;
			}		
		}
		
	});