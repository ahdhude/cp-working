function cycleImages(){
      var $active = $('#carosel .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#carosel img:first');
      
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }

$(document).ready(function(){
setInterval('cycleImages()', 7000);
	
});




/* function changenavbarfixed(){
    
    $('.topnav').attr('class', 'sticky');
   
    
}
function changenavbarback(){
        $('.sticky').attr('class', '.topnav');
        

}


$(window).bind('scroll', function () {
    if($(window).scrollTop() > 100) {
        
        $('.topnav').addClass('sticky');
        
        
    } else {
        $('.topnav').removeClass('sticky');
        
    }
}); */


function mobileiconactive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}







$(document).ready(function(){
	

	
 $(".navigation").hover(function() {
	$( this ).addClass("navigation-hover");
	  
 	});
 $(".navigation").mouseleave(function() {
	$( this ).removeClass("navigation-hover");
	 
 	});
 

	
  
});

$(function(){
	var slideCount=$('#carosel ul li').length;
	var slideWidth=$('#carosel ul li').width;
	var slideHeight=$('#carosel ul li').height;
	var sliderUlWidth=slideCount*slideWidth;
	
	$('#carosel').css({
        width: slideWidth,
        height: slideHeight
    });

    $('#carosel ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });

    $('#carosel ul li:last-child').prependTo('#carosel ul');
	
	 function moveLeft() {
        $('#carosel ul').animate({
            left: +1000
        }, 250, function () {
            $('#carosel ul li:last-child').prependTo('#carosel ul');
            $('#carosel ul').css('left', '');
        });
    };
	
	
	function moveRight() {
        $('#carosel ul').animate({
            left: -1000
        }, 250, function () {
            $('#carosel ul li:first-child').appendTo('#carosel ul');
            $('#carosel ul').css('left', '');
        });
	};
		
		

	
	$('#nav-left').click(function () {
        moveRight();
    });
	
	$('#nav-right').click(function () {
        moveLeft();
    });
	
	});




    