$(document).ready(function(){





    var navLeft = $('.cont-navLeft');
    var showLeft = $('#left-menu');




    $(showLeft).click(function(){
		    $(navLeft).toggleClass("openLeft");
		    $(document.body).toggleClass("push-right");
		    return false;
    });




    var FEED_URL = 'https://paulsellers.com/woodworking-blog/paul-sellers-blog/feed/';

    $('#divRss').FeedEk({
        FeedUrl:FEED_URL,
        yt:false
    });

    var FEED_URL_2 = 'https://blog.grc.com/feed';
    // https://blog.grc.com/feed

    $('#divRss_2').FeedEk({
        FeedUrl:FEED_URL_2,
        yt:false
    });

    var FEED_URL_3 = 'https://www.finewoodworking.com/feed';
    var FEED_IMG = 'https://images.squarespace-cdn.com/content/v1/5e1f95ab551cee375e676894/1580239656498-ZBWDVFYVBLW5XNIG0E1K/ke17ZwdGBToddI8pDm48kODEHMGUBRgRRplOmqRomK1Zw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Rb66VC8y5UmDKESC3gpGyXuuE80dFkeX9PanWgM3V4qRJePadRz66WmX0L5eMAEew/fine-woodworking-logo.png';
    // https://blog.grc.com/feed

    $('#divRss_3').FeedEk({
        FeedUrl:FEED_URL_3,
        FeedImg: FEED_IMG,
        yt:false
    });

    var FEED_URL_4 = 'https://planet.ubuntu.com/rss20.xml';
    var FEED_IMG = 'https://i1.wp.com/hirecloud.io/wp-content/uploads/statement-on-ibm-acquisition-of-red-hat.png';
    // https://blog.grc.com/feed

    $('#divRss_4').FeedEk({
        FeedUrl:FEED_URL_4,
        FeedImg: FEED_IMG,
        yt:false
    });

    var FEED_URL_5 = 'http://askubuntu.com/feeds';
    var FEED_IMG = 'https://i.stack.imgur.com/AHlW0.png';
    // https://blog.grc.com/feed

    $('#divRss_5').FeedEk({
        FeedUrl:FEED_URL_5,
        FeedImg: FEED_IMG,
        yt:false
    });

    var FEED_URL_6 = 'https://www.gimp.org/feeds/rss.xml';
    // https://blog.grc.com/feed

    $('#divRss_6').FeedEk({
        FeedUrl:FEED_URL_6,
        yt:false
    });

    // var FEED_URL_7 = 'https://www.youtube.com/channel/UCj4SLNED1DiNPHComZTCbzw/feeds';
    var FEED_URL_7 = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCj4SLNED1DiNPHComZTCbzw';
    // var FEED_IMG = 'https://img.youtube.com/vi//default.jpg';
    yt = true;
    // https://blog.grc.com/feed

    $('#divRss_7').FeedEk({
        FeedUrl:FEED_URL_7,
        yt:true
    });









});

