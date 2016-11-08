$( document ).ready(function() {

$('.image-logo').click(function(){
// remove all the .select and later add them. so you want have dubbles
	$('.select').remove();
	$(this).append("<div class=select></div>");
	$('.select').toggleClass('display');

});

// upload file
$('.upload').click(function(e) {
    $(this).find('input[type="file"]').click();
});

$('.upload input').click(function(e) {
    e.stopPropagation();
});

});
