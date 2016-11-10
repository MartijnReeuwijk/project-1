$( document ).ready(function() {

	$('section:nth-of-type(2)').click(function(){
		$('#eerste').toggleClass('display');
	});

	$('section:nth-of-type(3)').click(function(){
		$('#tweede').toggleClass('display');
	});

	$('section:nth-of-type(4)').click(function(){
		$('#derde').toggleClass('display');
	});




$('.exit').click(function(){
	$('.overlay').removeClass('display');
});


});
