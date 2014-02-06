//Navigation
$(document).ready(function() {
	$('.submenu').hide();
$("#galleryNav").hover(function(){
	$(".submenu").toggle();
});
	masonize();
});



	

		
//Masonry
function masonize(){
	var containers = Array.prototype.slice.call(document.querySelectorAll('.photogal'));
containers.forEach(function(container,index){
	var msnry = new Masonry(container,{itemSelector:
		'img',
		gutter:10
	});
})
}