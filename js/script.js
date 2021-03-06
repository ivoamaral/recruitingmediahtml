/* Author:

*/

$(function() {

	$('.account a.toggle').click(function() {
		$('.account').toggleClass('active');
		$('.account ul').toggleClass('hide');
	});

	$('.sub-navigation li a, .media-lists .panel a, .media-lists .controls a').hover(function() {
		$(this).toggleClass('active');
	});

	$('.archives a.toggle').click(function() {
		var txt1 = $(this).find('span:eq(0)').text() == '\u002B' ? '\u002D' : '\u002B'; // needed for chrome font bug using "+" sign
		var txt2 = $(this).find('span:eq(1)').text() == ' Expand' ? ' Collapse' : ' Expand';
		$(this).find('span:eq(0)').text(txt1);
		$(this).find('span:eq(1)').text(txt2);

		$('.archives ul').toggleClass('hide');
		return false;
	});

	$('.follow.facebook .fb-like iframe, .follow.facebook .fb-like span').css('width', '100%');

});
