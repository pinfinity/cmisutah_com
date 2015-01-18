// Initialize foundation
$(document).foundation();

$(document).ready(function() {
	var vids = $("iframe[src*='yout']");

	for( var i = 0; i < vids.length; i ++){
		var vid = vids[i];
		var src = $(vid).attr("src");
		var youTubeOptions = "?showinfo=0";
		console.log(vid);
		console.log(src);
		$(vid).attr("src", src + youTubeOptions).attr("style", "")

	}

	setTimeout( function() {
		$("main").fitVids()} , 10);
});