$("ul").on("click", "li", function() {
	$(this).toggleClass("done");
});

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		//graabing new toDo text from input
		var toDoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + toDoText + " </li>");
	}
});

$(".fa-plus").on("click", function() {
	$("input[type='text']").fadeToggle();
	$(this).toggleClass("fa-plus");
	$(this).toggleClass("fa-minus");
});
$(".fa-minus").on("click", function() {
	$("input[type='text']").fadeToggle();
	$(this).toggleClass("fa-plus");
	$(this).toggleClass("fa-minus");
});
