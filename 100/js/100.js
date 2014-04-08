var count = 1;

$( document ).ready(function() {
	$('.cell').each( function(){
		$(this).addClass("clickable");
	});
	$('.clickable').click(click);
	
	$('.restart').click(restart);
});

function click(){
		$('.last').removeClass('last');

		$(this).removeClass("clickable");
		$(this).off('click');
		$(this).addClass("clicked");	
		$(this).addClass("last");
			
		$('.clickable').each( function(){
			$(this).removeClass("clickable");
			$(this).off('click');
		});
		
		$(this).html(count); 
		$('#bar').width(count+"%");
		count++; 
		if(count>100){
			$('#game-win').show();
			return;
		}
		$('#game-win').show();
		var x = +$(this).attr('id').substr(0,1);
		var y = +$(this).attr('id').substr(1,1);
		
		if($('#'+(x+3)+y).html()=="") $('#'+(x+3)+y).addClass("clickable");
		if($('#'+(x+2)+(y+2)).html()=="") $('#'+(x+2)+(y+2)).addClass("clickable");
		if($('#'+(x)+(y+3)).html()=="") $('#'+(x)+(y+3)).addClass("clickable");
		if($('#'+(x-2)+(y+2)).html()=="") $('#'+(x-2)+(y+2)).addClass("clickable");
		if($('#'+(x-3)+y).html()=="") $('#'+(x-3)+y).addClass("clickable");
		if($('#'+(x-2)+(y-2)).html()=="") $('#'+(x-2)+(y-2)).addClass("clickable");
		if($('#'+(x)+(y-3)).html()=="") $('#'+(x)+(y-3)).addClass("clickable");
		if($('#'+(x+2)+(y-2)).html()=="") $('#'+(x+2)+(y-2)).addClass("clickable");
		
		var con = false;
		$('.clickable').each( function(){
			$(this).addClass("clickable");
			$(this).click(click);
			con = true;
		});
		if(!con){
			$('#count').html(count-1);
			$('#game-over').show();
		}
}

function restart(){
	$('.game-message').each( function(){ $(this).hide(); });
	$('.cell').each( function(){
		$(this).removeClass("clicked");
		$(this).off('click');
		$(this).html("");
		$(this).addClass("clickable");
		count = 1;
		$('#bar').width("0%");
	});
	$('.clickable').click(click);
}