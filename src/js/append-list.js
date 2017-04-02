$(document).ready(function(){
	var counter = 0;

	$('.list-button').on('click', manager);

	function manager(){
		var tmp = $('input[name=list-item]').val();
		//TODO Parse string to handle http(s) and edge cases
		$('.list-area').append('<li class="list-element">' + tmp + '<div class="close-button" id="close' + counter + '"><b>X</b></div>' + '</li>');
		$('#close' + counter).click(function(){
			$(this).parent().remove();
		});

		counter++;
	};
});