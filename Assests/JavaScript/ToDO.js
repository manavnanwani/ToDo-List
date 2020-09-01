$("ul").on("click", "li", function()
{
	$(this).toggleClass("done");
});

$("ul").on("click", "span", function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(250, function(){
			$(this).remove();
		});
});

$("input[type='text").keypress(function(event){
	if(event.which === 13)
	{
		var x = $(this).val();
		$("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span> " + x + "</li>");
		$(this).val("");
	}
});

$(".fa-plus-square").click(function(){
	$("input[type='text").fadeToggle(300);
});