$(document).ready(function(){
	$('.list-button').click(function(){
		var tmp = $('input[name=list-item]').val();
		//TODO Parse string to handle http(s) and edge cases
    	$('.list-area').append('<li class="list-element">' + tmp + '<div class="close-button"><b>X</b></div>' + '</li>');
	});
});