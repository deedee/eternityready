$(document).ready(function(){
    [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function() {
		img.removeAttribute('data-src');
	};
});
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
				options.async = true;
		});

	$('#menu-icon').on('click',function(){
		$(this).toggleClass('open');
        $("nav#main-menu").slideToggle("fast");
	});
    
    $('ul.menu > li > ul > li').on('click', function() {
        var el = $(this).find("ul");
        $(el).slideToggle("fast");
        
        // Prevent page position change
        return false;
    });
    
    $('.flexslider').flexslider({
        slideshow: true,
        //vertical:true,
        slideshowSpeed: 5000,
        directionNav: false
    });
    
//    $('.flexslider2').each(function(n,el) {
            $('.flexslider2').flexslider({
            selector: ".slider > .ui.card",
            animation: "slide",
            animationLoop: false,
            itemWidth: 210,
            itemMargin: 10,
            direction: "vertical",
            controlNav: false,
            directionNav: false
        });
//    })
    $('.flexslider3').flexslider({
            selector: ".slider > .ui.card",
            animation: "slide",
            animationLoop: false,
            itemWidth: 320,
            itemMargin: 10,
            direction: "vertical",
            controlNav: false,
            directionNav: false
        });

if ($(window).width() < 480) {        
    $('.tile').tap(function() { 
    var link = $(this).find(".enter").attr('href');
    location.href = link;
});  

}
        
    var timemen = true;
    $('.dropdown').hover(function(){
        $('.dropdiv').slideDown(50);
        timemen = true;
    }, function(){
    timemen = false; 
    setTimeout(function(){ 
        
      if (!timemen) {        
          $('.dropdiv').slideUp(50);
      }  
        
    }, 1500);

        
    });
    
    $('.dropdiv').hover(function(){
        timemen = true;
    }, function(){
        timemen = false;
        //$('.dropdiv').slideUp(50);

        setTimeout(function(){    
      if (!timemen) {        
          $('.dropdiv').slideUp(50);
      }  
        
    }, 1500);
    });    

    $('#search-en').on('click',function(){
   
        $('#inpsearch').show(300);
        $('#inpsearch').val("");
        $('#search-en').hide();
        $('.search-input').append('<a href="" id="closesearch">×</a>');
        $('#closesearch').hide();
        $('#closesearch').on('click',function(e){
        e.preventDefault();
        //$('#inpsearch').hide();
        //$('#search-en').show("300");
        //$('#closesearch').remove();
        //$('.overlayvid').remove();
        $('#closesearch').hide();
        $('#inpsearch').val("");
        $('#inputcontent').html("");
       
    });

    });
    
    
    
  

    $('#search-en-mobile').on('click',function(){
         //$('#inpsearch').css({"z-index":"7"});
         
         $('.overlayvid').remove();
         $('#header-mobile').css({"background":"none"});
         $('.flexslider').hide();
         $('.body-content').hide();
         $('body').append('<div class="overlayvid" style="z-index:3;background-color:#111111;"><div style="width:100%;height:100%;opacity:1;" id="inputcontent-mobile"></div></div>');
    $(".overlayvid").toggle();
    $('#menu-icon').hide();
    $('#header-mobile img').hide();
    $('.search-input-mobile').prepend('<a href="" id="backarrow">←</a>');
    $('.flexslider').show();
         $('.body-content').show();
        $('#inpsearch-mobile').val("");
        $('#inpsearch-mobile').show();
        $('#search-en-mobile').hide();
        $('.search-input-mobile').append('<a href="" id="closesearch-mobile">×</a>');
        
        $('#closesearch-mobile').hide();
        $('#backarrow').on('click',function(e){
       
        e.preventDefault();
        $('#header-mobile').css({"background-color":"rgba(0, 38, 43, 0.3)"});
        $('#inpsearch-mobile').hide();
        $('#search-en-mobile').show("300");
        $('#closesearch-mobile').remove();
        $('.overlayvid').remove();
        $('#menu-icon').show();
    $('#header-mobile img').show();
    $('#backarrow').remove();
        
    });    
        
        $('#closesearch-mobile').on('click',function(e){
        e.preventDefault();
        $('#inpsearch-mobile').val("");
        $('.overlayvid').html('');
        $('#closesearch-mobile').hide();
    });

    });
    
    
    setInterval(function(){ 
      if($(window).width() > 768)
      {
         if ($('#inpsearch').val() == "")
         {
            $('#over1').remove();
         }
      
      }
    
    }, 1000);
        
    $('#inpsearch').on('input',function(e){
       
       var sr = $(this).val();
       if (sr == "")
       {
          $('.overlayvid').remove();
          $('#closesearch').remove();
          $('#inpsearch').hide();
          $('#search-en').show();
          
          
       } else {
       $.get( "/freelance_additions/cover_search.php?s="+sr, function( data ) {
       
       $('.overlayvid').remove();
       $('#closesearch').show();
       $('body').append('<div class="overlayvid" id="over1" style="z-index:3;background-color:#111111;"><div style="width:100%;height:100%;opacity:1;" id="inputcontent"></div></div>');

       
       
  $('#inputcontent').html(data);
  $(".overlayvid").toggle();
  //alert( "Load was performed." );
});
       
       
    }   
    
    });
    
    //$("#inpsearch-mobile" ).keypress(function() {
    //    alert('++');
    //});

    $('#inpsearch-mobile').keyup(function() {
       
       //alert($(this).val());
       var sr = $(this).val();
       if (sr == "")
       {
          
          $('.flexslider').show();
          $('.body-content').show();
          
          $('#header-mobile').css({"background-color":"rgba(0, 38, 43, 0.3)"});
          $('.overlayvid').remove();
          $("#inpsearch-mobile" ).hide();
          $('#search-en-mobile').show();
          $('#menu-icon').show();
    $('#header-mobile img').show();
    $('#backarrow').remove();
    $('#closesearch-mobile').remove();
          
       } else {
       $('#closesearch-mobile').show();
       
       $.get( "/freelance_additions/cover_search.php?s="+sr, function( data ) {
       
       //$('.overlayvid').remove();
       
       
       
       
  $('#inputcontent-mobile').html(data);
  
  //alert( "Load was performed." );
});
       
       
    }   
    
    });


    $('.ui.search').search({
	    debug:1,
        apiSettings: {
	        cache: 0,
            url: 'http://eternityready.com/beta/2/api.php?search={$query}',
//            throttleFirstRequest : false,
            loadingDuration : 2000,
            fields: {
                results : 'results',
                url     : 'url',
                title   : 'title',
                thumb   : 'thumb'
            },
            minCharacters : 1,
            onResponse  : function(searchResult) {
	            
                var response = {
                    results: {}
                }
                
                if (!searchResult || !searchResult.items) {
                  return;
                }
                
                $.each(searchResult, function(i, item) {
                     // create new language category
                      response.results = item
                    
                })
            },
            onError:function(m)
            {
	          //alert('+++');
	          console.log(m);  
            },
            onFailure:function(m,e)
            {
	          //alert(m);
	          console.log(m);  
            },
            onResults: function(response){
	            
             var html = '';
             if(response!== undefined) {
                $.each(response, function(index, result) {
                    html  += '<a class="result" href="' + result.url + '"><div class="content">';
                    html += '<img class="ui mini image" src="' + result.thumb + '">';
                    html += '<div class="title">' + result.title + '</div>';
                    html  += '' + '</div></a>';
                    return index < 6;
                });
                $('.ui.search div.results').html(html);
             }
              return false;
            },
        }
    });
    
});