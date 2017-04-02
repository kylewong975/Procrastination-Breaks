$(document).ready(function(){
	$('.list-button').click(function(){
		var tmp = $('input[name=list-item]').val();
		//TODO Parse string to handle http(s) and edge cases
    	$('.list-area').append('<li>' + tmp + '</li>');
	});
});