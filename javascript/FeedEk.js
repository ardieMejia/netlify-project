/*! FeedEk jQuery RSS/ATOM Feed Plugin v3.1.1
 * https://jquery-plugins.net/FeedEk/FeedEk.html  https://github.com/enginkizil/FeedEk
 * Author : Engin KIZIL */
(function ($) {
	  $.fn.FeedEk = function (opt) {
        // note the extend, it morphs a simple declaration into some object-oriented expression
		    var def = $.extend({
			      MaxCount: 1,
			      ShowDesc: true,
			      ShowPubDate: true,
			      DescCharacterLimit: 0,
			      TitleLinkTarget: "_blank",
			      DateFormat: "",
			      DateFormatLang: "en"
		    }, opt);

		    var id = $(this).attr("id"), s = "", dt;
		    $("#" + id).empty();
		    if (def.FeedUrl == undefined) return;
		    $("#" + id).append('<img src="loader.gif" />');
		    $.ajax({
			      url: "https://feed.jquery-plugins.net/load?url=" + encodeURIComponent(def.FeedUrl) + "&maxCount=" + def.MaxCount + "&dateCulture=" + def.DateFormatLang + "&dateFormat=" + def.DateFormat,
			      dataType: "json",
			      success: function (result) {
				        $("#" + id).empty();
				        if (result.data == null)
					          return;

                // console.log(result);
                // console.log(result.data.keys());
                // console.log(result.data[0]);

                // console.log(result.length);

                // display(perrequest-->data)
                // Turn on string splitter for result returned from Youtube Channel
                if (def.yt){
                    var stringToSplit = JSON.stringify(result.data[0].link);
                    var yt_VideoID = stringToSplit.split('=')[1];
                    yt_VideoID = yt_VideoID.slice(0,-1);
                    console.log('string = ' + yt_VideoID[-1]);
                    // I used .extend!! yay!!
                    $.extend(def,{FeedImg: 'https://img.youtube.com/vi/' + yt_VideoID + '/hqdefault.jpg'});
                }



				        $.each(result.data, function (e, itm) {
					          s += '<li><div class="itemTitle"><h1><a href="' + itm.link + '" target="' + def.TitleLinkTarget + '" >' + itm.title + '</a></h1></div>';

					          if (def.ShowPubDate) {

						            dt = new Date(itm.publishDate);
						            s += '<div class="itemDate">';
						            if ($.trim(def.DateFormat).length > 0) {
							              s += itm.publishDateFormatted;
						            }
						            else {
							              s += dt.toLocaleDateString();
						            }
						            s += '</div>';
					          }
					          if (def.ShowDesc) {
						            s += '<div class="itemContent">';
						            if (def.DescCharacterLimit > 0 && itm.description.length > def.DescCharacterLimit) {
							              s += itm.description.substring(0, def.DescCharacterLimit) + '...';
						            }
						            else {
							              s += itm.description;
						            }


						            s += '</div>';
					          }
                    // display(perrequest-->data-->itm-->description)
                    // console.log('#' + id + ' --> ' + itm.description);
				        });



                if (def.FeedImg) {
                    // display FeedImg "string"
                    console.log('FeedImg ' + def.FeedImg);
                    var imageTag='<img src="' + def.FeedImg + '" width="100%"/>';
                }
                else {
                    var imageTag ='';
                }

				        $("#" + id).append('<ul class="feedEkList">' + imageTag + s + '</ul>');
                $('#' + id).find('img').attr('width','100%');


				        


			      }
		    });
	  };
})(jQuery);
