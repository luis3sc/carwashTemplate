 // copiar y pegar //
$(document).ready(function() {
	$('#copiar, #copia').click(function(){
		var btntxt = $(this).text();
		var copy = $(this).parent().find('.copy').text();
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val(copy).select();
		document.execCommand("copy");
		$temp.remove();
		$('.confirmation').hide().html( 'el numero' + '</b> Ha sido copiado al portapapeles').fadeIn(100).delay(800).fadeOut(200);
		$( '.main' ).trigger( "click" );
	});
	$('.main div').click(function(){
		var range = document.createRange();
		var selection = window.getSelection();
		range.selectNodeContents(this);
		selection.removeAllRanges();
		selection.addRange(range);
	});
});