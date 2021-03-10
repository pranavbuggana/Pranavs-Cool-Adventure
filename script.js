$(".start-adventure-button").click(function(){
	$(".adventure-start").css('display', 'block');
    $(".welcome").hide();
});

$(".decline-adventure-button").click(function(){
	$(".decline-adventure").css('display', 'block');
    $(".welcome").hide();
});

$(".go-left-button").click(function(){
	$(".went-left").css('display', 'block');
    $(".adventure-start").hide();
});
$(".go-right-button").click(function(){
	$(".went-right").css('display', 'block');
    $(".adventure-start").hide();
});