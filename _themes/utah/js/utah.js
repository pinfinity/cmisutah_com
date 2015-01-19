// Initialize foundation
$(document).foundation();

$(document).ready(function() {
	var vids = $("iframe[src*='yout']");

	for( var i = 0; i < vids.length; i ++){
		var vid = vids[i];
		var src = $(vid).attr("src");
		var youTubeOptions = "?rel=0&amp;showinfo=0";
		if ( src.indexOf("?") >= 0){
			youTubeOptions = "";
		}
		console.log(vid);
		console.log(src);
		$(vid).attr("src", src + youTubeOptions).attr("style", "");
	}

	setTimeout( function() {
		$("main").fitVids()} , 10);

	$('.no-results').each(function() { 
			// when there are no results on the video page
			// this hides the empty listings
			// and it's previoue catetgory link
			$(this).closest('.listing').hide().prev().hide(); 

			$('.cat-link:visible').first().css({'margin-top': '0'});
	});
});