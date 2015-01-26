(function($) {
	window.app = {
		spritly : function(){
			$('#block').pan(
				{
					fps: 30,
					speed: 1,
					dir: 'left'
				}
			);
			$('#boy').sprite(
				{
					fps: 4,
					no_of_frames: 8
				}
			);
			$('#hurdle').pan(
				{
					fps: 30,
					speed: 10,
					dir: 'left'
				}
			);
			
		}
	}
		$(document).ready(function() {
			$('#play').click(function(){
				$('#play').replaceWith('<p>The Game Begins</p>');
				window.app.spritly();
				$('#jump').click(function(){
					$('#boy').animate({"top": "-=100px"}, "slow");
					$('#boy').animate({"top": "+=100px"}, "slow");
				});
			});			
		});
})(jQuery);