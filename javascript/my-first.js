$(document).ready(function(){

    var navLeft = $('.cont-navLeft');
    var showLeft = $('#left-menu');
    
   
    
    $(showLeft).click(function(){
		    $(navLeft).toggleClass("openLeft");
		    $(document.body).toggleClass("push-right");
		    return false;
	  });
    

});
