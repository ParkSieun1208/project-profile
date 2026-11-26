$(document).ready(function(){

	//사진에 마우스를 올리면 동영상을 처음부터 재생
	$(".pic.play").on("mouseenter",function(){
		var video = $(this).find("video").get(0);
		video.currentTime = 0;
		video.play();
	});

	//마우스가 나가면 동영상 멈춤 (서서히 사라진 뒤 사진만 보임)
	$(".pic.play").on("mouseleave",function(){
		$(this).find("video").get(0).pause();
	});

});
