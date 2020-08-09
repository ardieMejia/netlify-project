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
        });
    }


    for(var i=0;i<7;i++){
        trailer_woodworkerLinks.eq(i).on("dblclick",i,function(event){
            console.log('called double click');
            console.log(event.data);
            trailer_woodworkerLinks.eq(event.data).parent("a").attr('href',allHrefs[event.data]).trigger('click');

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

