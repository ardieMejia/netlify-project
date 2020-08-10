$(document).ready(function(){



    var trailer_woodworkerLinks = $('.trailer_woodworkerLinks');
    var allHrefs = [
        'https://www.youtube.com/channel/UCc3EpWncNq5QL0QhwUNQb7w',
        'https://www.youtube.com/channel/UCj4SLNED1DiNPHComZTCbzw',
        'https://www.youtube.com/user/jpheisz',
        'https://www.youtube.com/user/Matthiaswandel',
        'https://www.youtube.com/channel/UCRix1GJvSBNDpEFY561eSzw',
        'https://www.youtube.com/user/theartofweapons'
    ];
    var allMobileLink = $('.mobile_link');

    var slides = $('img.woodworkerSlides');


    for (i = 0; i < slides.length; i++) {
        slides.eq(i).css("display","none");
    }


    // so how you pass an index through clicking!!
    // not intuitive at all, actually
    for(var i=0;i<7;i++){
        trailer_woodworkerLinks.eq(i).on("click",i,function(event){
            var index = event.data;
            showSlides(index);
            // for mobile behaviour
            // we trick mobile by having 2 levels of 'hiding' behaviour, display:none and removing href=''
            allMobileLink.parent().attr('href','');
            allMobileLink.parent().attr('class','disabled-link-woodworking');
            allMobileLink.eq(event.data).parent().attr('href',allHrefs[event.data]);
            allMobileLink.eq(event.data).parent().removeClass('disabled-link-woodworking');
        });
    }




    for(var i=0;i<7;i++){
        trailer_woodworkerLinks.eq(i).on("dblclick",i,function(event){
            console.log('called double click');
            console.log(event.data);
            trailer_woodworkerLinks.eq(event.data).parent("a").attr('href',allHrefs[event.data]);
            // why cant this be oneline n more simple!! 
            setTimeout(
                function(){
                    trailer_woodworkerLinks.eq(event.data).parent("a").removeAttr('href');
                          }
                ,2000);
        });
    }


    slides.eq(0).css("display","block");
    function showSlides(n) {
        var i;


        // if (n > slides.length) {slideIndex = 1}
        // if (n < 1) {slideIndex = slides.length}

        for (i = 0; i < slides.length; i++) {
            slides.eq(i).css("display","none");
        }


        slides.eq(n).css("display","block");

    } 

});

