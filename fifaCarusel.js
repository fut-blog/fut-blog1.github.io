function toggleGameInfo(number){
	$(".game-series-item").hide();
	$("#game-series-"+number).fadeIn(300);
}

$(document).ready(function(){
	$(".toggle").click(function(){
		toggleGameInfo($(this).data("id"));
		$(".toggle-active").removeClass("toggle-active");
		$(this).addClass("toggle-active");
	});
	
	$("[data-id='1']").click();
	
});





