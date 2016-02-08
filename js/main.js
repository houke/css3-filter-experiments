jQuery(document).ready(function() {


	// Toggle sidebar content
	jQuery("aside ul li a").click(function(event){
		event.preventDefault();
		var visible = false;
		var thisEffect = jQuery(this).attr('id');
		if(jQuery(this).hasClass('active')){
			visible = true;
		}
		if(!visible){
			jQuery('aside ul li a').removeClass('active');
			jQuery(this).addClass('active');
			jQuery('section article').fadeOut(300);
			jQuery('section article.'+thisEffect).delay(300).fadeIn(300);
			jQuery('html,body').animate({scrollTop: 0}, 600);
		}
	});
	
	//Fill background
	jQuery('section.examples').css({
		'min-height': jQuery(window).height() - 20
	})
	
	//Image changer
	jQuery('section article .col .effect').click(function(){
		jQuery('#images').show();
		jQuery('#overlay').show();
	});
	jQuery('#images ul li.img1').click(function(){
		jQuery('section article .col .effect').css({
			'background-image':'url(http://houkedekwant.com/assets/images/TWC/5.jpg)'
		});		
	});
	
	jQuery('#images ul li.img2').click(function(){
		jQuery('section article .col .effect').css({
			'background-image':'url(http://houkedekwant.com/assets/images/TWC/1.jpg)'
		});
	});
	
	jQuery('#images ul li.img3').click(function(){
		jQuery('section article .col .effect').css({
			'background-image':'url(http://houkedekwant.com/assets/images/TWC/2.jpg)'
		});
	});
	jQuery('#images ul li.img4').click(function(){
		jQuery('section article .col .effect').css({
			'background-image':'url(http://houkedekwant.com/assets/images/Nikita/1.jpg)'
		});
	});
	jQuery('#images input[type="submit"]').click(function(){
		var valueimg=jQuery('#images input[type="url"]').val();
		if(valueimg != ""){
			jQuery('section article .col .effect').css({
				'background-image':'url('+valueimg+')'
			});
			jQuery('#images, #overlay').hide();
		}
	});
	
	jQuery('#overlay, #images .close, #images ul li').click(function(){
		jQuery('#images, #overlay').hide();
	});
	
	//Toggle sidebar position
	if( jQuery(window).height() > jQuery('aside').height()){
		jQuery('aside').css({
			'position': 'fixed',
			'z-index' : '3'
		});
		jQuery('section.examples').css({
			'left': '200px'
		});
	}
	
	jQuery('.codeopen').toggle(function(){
		jQuery(this).next('p').stop(true,true).fadeIn();
		jQuery(this).html('x');
	},function(){
		jQuery(this).next('p').stop(true,true).fadeOut();
		jQuery(this).html('i');
	});
	
	//Enable custom code output	
	 jQuery("pre.htmlCode").snippet("html", {
	    style: "bright"
	  });
	
	  jQuery("pre.styles, div.htmlStyles").snippet("css", {
	    style: "bright"
	  });
	
	  jQuery("pre.js").snippet("javascript", {
	    style: "bright"
	  });
  
  
  
  //Start the sliders
	  
		jQuery( ".Blur .slider" ).slider({
			value:0,
		    min: 0,
		    max: 10,
		    step: 1,
		    slide: function( event, ui ) {
		       cssval = ui.value+'px';
		       jQuery(this).closest("div.col").find(".effect").css({
			       '-webkit-filter': 'blur('+cssval+')',
			       '-moz-filter': 'blur('+cssval+')',
			       '-ms-filter': 'blur('+cssval+')',
			       '-o-filter': 'blur('+cssval+')',
			       'filter': 'blur('+cssval+')'
		       });
		       jQuery(this).parent().find('.sh_value:last-child').html(cssval);
		       jQuery(this).parent().find('.snippet-textonly').html('.effect{<br/>&nbsp;&nbsp;-webkit-filter: blur('+cssval+');<br/>&nbsp;&nbsp;-ms-filter: blur('+cssval+');<br/>&nbsp;&nbsp;-moz-filter: blur('+cssval+');<br/>&nbsp;&nbsp;-o-filter: blur('+cssval+');<br/>&nbsp;&nbsp;filter: blur('+cssval+');<br/>}');
		    }
		});
		
		jQuery( ".Grayscale .slider" ).slider({
			value:0,
		    min: 0,
		    max: 1,
		    step: 0.1,
		    slide: function( event, ui ) {
		       cssval = ui.value;
		       jQuery(this).closest("div.col").find(".effect").css({
			       '-webkit-filter': 'grayscale('+cssval+')',
			       '-moz-filter': 'grayscale('+cssval+')',
			       '-ms-filter': 'grayscale('+cssval+')',
			       '-o-filter': 'grayscale('+cssval+')',
			       'filter': 'grayscale('+cssval+')'
		       });
		       jQuery(this).parent().find('.sh_value:last-child').html(cssval);
		       jQuery(this).parent().find('.snippet-textonly').html('.effect{<br/>&nbsp;&nbsp;-webkit-filter: grayscale('+cssval+');<br/>&nbsp;&nbsp;-ms-filter: grayscale('+cssval+');<br/>&nbsp;&nbsp;-moz-filter: grayscale('+cssval+');<br/>&nbsp;&nbsp;-o-filter: grayscale('+cssval+');<br/>&nbsp;&nbsp;filter: grayscale('+cssval+');<br/>}');
		    }
		});
		
		jQuery( ".Brightness .slider" ).slider({
			value:0,
		    min: -1,
		    max: 1,
		    step: 0.1,
		    slide: function( event, ui ) {
		       cssval = ui.value;
		       jQuery(this).closest("div.col").find(".effect").css({
			       '-webkit-filter': 'brightness('+cssval+')',
			       '-moz-filter': 'brightness('+cssval+')',
			       '-ms-filter': 'brightness('+cssval+')',
			       '-o-filter': 'brightness('+cssval+')',
			       'filter': 'brightness('+cssval+')'
		       });
		       jQuery(this).parent().find('.sh_value:last-child').html(cssval);
		       jQuery(this).parent().find('.snippet-textonly').html('.effect{<br/>&nbsp;&nbsp;-webkit-filter: brightness('+cssval+');<br/>&nbsp;&nbsp;-ms-filter: brightness('+cssval+');<br/>&nbsp;&nbsp;-moz-filter: brightness('+cssval+');<br/>&nbsp;&nbsp;-o-filter: brightness('+cssval+');<br/>&nbsp;&nbsp;filter: brightness('+cssval+');<br/>}');
		    }
		});
		
		jQuery( ".Contrast .slider" ).slider({
			value:1,
		    min: 0,
		    max: 2,
		    step: 0.1,
		    slide: function( event, ui ) {
		       cssval = ui.value;
		       jQuery(this).closest("div.col").find(".effect").css({
			       '-webkit-filter': 'contrast('+cssval+')',
			       '-moz-filter': 'contrast('+cssval+')',
			       '-ms-filter': 'contrast('+cssval+')',
			       '-o-filter': 'contrast('+cssval+')',
			       'filter': 'contrast('+cssval+')'
		       });
		       jQuery(this).parent().find('.sh_value:last-child').html(cssval);
		       jQuery(this).parent().find('.snippet-textonly').html('.effect{<br/>&nbsp;&nbsp;-webkit-filter: contrast('+cssval+');<br/>&nbsp;&nbsp;-ms-filter: contrast('+cssval+');<br/>&nbsp;&nbsp;-moz-filter: contrast('+cssval+');<br/>&nbsp;&nbsp;-o-filter: contrast('+cssval+');<br/>&nbsp;&nbsp;filter: contrast('+cssval+');<br/>}');
		    }
		});
		
		jQuery( ".Sepia .slider" ).slider({
			value:0,
		    min: 0,
		    max: 1,
		    step: 0.1,
		    slide: function( event, ui ) {
		       cssval = ui.value;
		       jQuery(this).closest("div.col").find(".effect").css({
			       '-webkit-filter': 'sepia('+cssval+')',
			       '-moz-filter': 'sepia('+cssval+')',
			       '-ms-filter': 'sepia('+cssval+')',
			       '-o-filter': 'sepia('+cssval+')',
			       'filter': 'sepia('+cssval+')'
		       });
		       jQuery(this).parent().find('.sh_value:last-child').html(cssval);
		       jQuery(this).parent().find('.snippet-textonly').html('.effect{<br/>&nbsp;&nbsp;-webkit-filter: sepia('+cssval+');<br/>&nbsp;&nbsp;-ms-filter: sepia('+cssval+');<br/>&nbsp;&nbsp;-moz-filter: sepia('+cssval+');<br/>&nbsp;&nbsp;-o-filter: sepia('+cssval+');<br/>&nbsp;&nbsp;filter: sepia('+cssval+');<br/>}');
		    }
		});
		
		jQuery( ".Invert .slider" ).slider({
			value:0,
		    min: 0,
		    max: 1,
		    step: 0.1,
		    slide: function( event, ui ) {
		       cssval = ui.value;
		       jQuery(this).closest("div.col").find(".effect").css({
			       '-webkit-filter': 'invert('+cssval+')',
			       '-moz-filter': 'invert('+cssval+')',
			       '-ms-filter': 'invert('+cssval+')',
			       '-o-filter': 'invert('+cssval+')',
			       'filter': 'invert('+cssval+')'
		       });
		       jQuery(this).parent().find('.sh_value:last-child').html(cssval);
		       jQuery(this).parent().find('.snippet-textonly').html('.effect{<br/>&nbsp;&nbsp;-webkit-filter: invert('+cssval+');<br/>&nbsp;&nbsp;-ms-filter: invert('+cssval+');<br/>&nbsp;&nbsp;-moz-filter: invert('+cssval+');<br/>&nbsp;&nbsp;-o-filter: invert('+cssval+');<br/>&nbsp;&nbsp;filter: invert('+cssval+');<br/>}');
		    }
		});
		
		jQuery( ".Opacity .slider" ).slider({
			value:1,
		    min: 0,
		    max: 1,
		    step: 0.1,
		    slide: function( event, ui ) {
		       cssval = ui.value;
		       jQuery(this).closest("div.col").find(".effect").css({
			       '-webkit-filter': 'opacity('+cssval+')',
			       '-moz-filter': 'opacity('+cssval+')',
			       '-ms-filter': 'opacity('+cssval+')',
			       '-o-filter': 'opacity('+cssval+')',
			       'filter': 'opacity('+cssval+')'
		       });
		       jQuery(this).parent().find('.sh_value:last-child').html(cssval);
		       jQuery(this).parent().find('.snippet-textonly').html('.effect{<br/>&nbsp;&nbsp;-webkit-filter: opacity('+cssval+');<br/>&nbsp;&nbsp;-ms-filter: opacity('+cssval+');<br/>&nbsp;&nbsp;-moz-filter: opacity('+cssval+');<br/>&nbsp;&nbsp;-o-filter: opacity('+cssval+');<br/>&nbsp;&nbsp;filter: opacity('+cssval+');<br/>}');
		    }
		});
		
		jQuery( ".Saturate .slider" ).slider({
			value:1,
		    min: 0,
		    max: 10,
		    step: 0.5,
		    slide: function( event, ui ) {
		       cssval = ui.value;
		       jQuery(this).closest("div.col").find(".effect").css({
			       '-webkit-filter': 'saturate('+cssval+')',
			       '-moz-filter': 'saturate('+cssval+')',
			       '-ms-filter': 'saturate('+cssval+')',
			       '-o-filter': 'saturate('+cssval+')',
			       'filter': 'saturate('+cssval+')'
		       });
		       jQuery(this).parent().find('.sh_value:last-child').html(cssval);
		       jQuery(this).parent().find('.snippet-textonly').html('.effect{<br/>&nbsp;&nbsp;-webkit-filter: saturate('+cssval+');<br/>&nbsp;&nbsp;-ms-filter: saturate('+cssval+');<br/>&nbsp;&nbsp;-moz-filter: saturate('+cssval+');<br/>&nbsp;&nbsp;-o-filter: saturate('+cssval+');<br/>&nbsp;&nbsp;filter: saturate('+cssval+');<br/>}');
		    }
		});
		
		jQuery( ".Hue-rotate .slider" ).slider({
			value:0,
		    min: 0,
		    max: 360,
		    step: 10,
		    slide: function( event, ui ) {
		       cssval = ui.value+"deg";
		       jQuery(this).closest("div.col").find(".effect").css({
			       '-webkit-filter': 'hue-rotate('+cssval+')',
			       '-moz-filter': 'hue-rotate('+cssval+')',
			       '-ms-filter': 'hue-rotate('+cssval+')',
			       '-o-filter': 'hue-rotate('+cssval+')',
			       'filter': 'hue-rotate('+cssval+')'
		       });
		       jQuery(this).parent().find('.sh_value:last-child').html(cssval);
		       jQuery(this).parent().find('.snippet-textonly').html('.effect{<br/>&nbsp;&nbsp;-webkit-filter: hue-rotate('+cssval+');<br/>&nbsp;&nbsp;-ms-filter: hue-rotate('+cssval+');<br/>&nbsp;&nbsp;-moz-filter: hue-rotate('+cssval+');<br/>&nbsp;&nbsp;-o-filter: hue-rotate('+cssval+');<br/>&nbsp;&nbsp;filter: hue-rotate('+cssval+');<br/>}');
		    }
		});
		
		jQuery( ".Drop-shadow .slider" ).slider({
			value:0,
		    min: 0,
		    max: 10,
		    step: 1,
		    slide: function( event, ui ) {
		       cssval = ui.value+"px";
		       jQuery(this).closest("div.col").find(".effect").css({
			       '-webkit-filter': 'drop-shadow('+ ui.value + 'px ' + ui.value + 'px ' + ui.value + 'px black)',
			       '-moz-filter': 'drop-shadow('+ ui.value + 'px ' + ui.value + 'px ' + ui.value + 'px black)',
			       '-ms-filter': 'drop-shadow('+ ui.value + 'px ' + ui.value + 'px ' + ui.value + 'px black)',
			       '-o-filter': 'drop-shadow('+ ui.value + 'px ' + ui.value + 'px ' + ui.value + 'px black)',
			       'filter': 'drop-shadow('+ ui.value + 'px ' + ui.value + 'px ' + ui.value + 'px black)'
		       });
		       jQuery(this).parent().find('.sh_value:nth-child(3), .sh_value:nth-child(4), .sh_value:nth-child(5)').html(cssval);
		       jQuery(this).parent().find('.snippet-textonly').html('.effect{<br/>&nbsp;&nbsp;-webkit-filter: hue-rotate('+cssval+');<br/>&nbsp;&nbsp;-ms-filter: hue-rotate('+cssval+');<br/>&nbsp;&nbsp;-moz-filter: hue-rotate('+cssval+');<br/>&nbsp;&nbsp;-o-filter: hue-rotate('+cssval+');<br/>&nbsp;&nbsp;filter: hue-rotate('+cssval+');<br/>}');
		    }
		});
		      
      
      
	    jQuery('.Playground .home .slider').each(function() {
	    	if(jQuery(this).hasClass('Blur')){
	    		var ElemClass = 'Blur';
		    	var value = 0;
		    	var min = 0;
		    	var max = 10;
		    	var step = 1;
		    	var ext = 'px';
	    	}
	    	if(jQuery(this).hasClass('Grayscale')){
	    		var ElemClass = 'Grayscale';
		    	var value = 0;
		    	var min = 0;
		    	var max = 1;
		    	var step = 0.1;
		    	var ext = '';
	    	}
	    	if(jQuery(this).hasClass('Brightness')){
	    		var ElemClass = 'Brightness';
		    	var value = 0;
		    	var min = -1;
		    	var max = 1;
		    	var step = 0.1;
		    	var ext = '';
	    	}
	    	if(jQuery(this).hasClass('Contrast')){
	    		var ElemClass = 'Contrast';
		    	var value = 1;
		    	var min = 0;
		    	var max = 2;
		    	var step = 0.1;
		    	var ext = '';
	    	}
	    	if(jQuery(this).hasClass('Drop-shadow')){
	    		var ElemClass = 'Drop-shadow';
		    	var value = 0;
		    	var min = 0;
		    	var max = 10;
		    	var step = 1;
		    	var ext = '';
	    	}
	    	if(jQuery(this).hasClass('Sepia')){
	    		var ElemClass = 'Sepia';
		    	var value = 0;
		    	var min = 0;
		    	var max = 1;
		    	var step = 0.1;
		    	var ext = '';
	    	}
	    	if(jQuery(this).hasClass('Hue-rotate')){
	    		var ElemClass = 'Hue-rotate';
		    	var value = 0;
		    	var min = 0;
		    	var max = 360;
		    	var step = 10;
		    	var ext = 'deg';
	    	}
	    	if(jQuery(this).hasClass('Invert')){
	    		var ElemClass = 'Invert';
		    	var value = 0;
		    	var min = 0;
		    	var max = 1;
		    	var step = 0.1;
		    	var ext = '';
	    	}
	    	if(jQuery(this).hasClass('Opacity')){
	    		var ElemClass = 'Opacity';
		    	var value = 1;
		    	var min = 0;
		    	var max = 1;
		    	var step = 0.1;
		    	var ext = '';
	    	}
	    	if(jQuery(this).hasClass('Saturate')){
	    		var ElemClass = 'Saturate';
		    	var value = 1;
		    	var min = 0;
		    	var max = 10;
		    	var step = 0.5;
		    	var ext = '';
	    	}
		    jQuery('.Playground .home .slider.'+ElemClass).slider({
		        value: value,
		        min: min,
		        max: max,
		        step: step,
		        slide: function(event, ui) {
					if ( ElemClass == 'Drop-shadow'){
						cssval = ElemClass.toLowerCase() +'('+ ui.value + 'px ' + ui.value + 'px ' + ui.value + 'px black)';
					}else{
						cssval = ElemClass.toLowerCase() +'('+ui.value+ext+')';
					}
			       jQuery(this).prev('section article.Playground .col .controls h6').find('span').html(cssval);
			       
			       value1 = jQuery('.Playground .col .controls .Blur').prev('h6').find('span').html();
			       value2 = jQuery('.Playground .col .controls .Grayscale').prev('h6').find('span').html();
			       value3 = jQuery('.Playground .col .controls .Brightness').prev('h6').find('span').html();
			       value4 = jQuery('.Playground .col .controls .Contrast').prev('h6').find('span').html();
			       value5 = jQuery('.Playground .col .controls .Drop-shadow').prev('h6').find('span').html();
			       value6 = jQuery('.Playground .col .controls .Sepia').prev('h6').find('span').html();
			       value7 = jQuery('.Playground .col .controls .Hue-rotate').prev('h6').find('span').html();
			       value8 = jQuery('.Playground .col .controls .Invert').prev('h6').find('span').html();
			       value9 = jQuery('.Playground .col .controls .Opacity').prev('h6').find('span').html();
			       value10 = jQuery('.Playground .col .controls .Saturate').prev('h6').find('span').html();
			       
			       jQuery('.Playground .col .effect').css({
				      '-webkit-filter': value1+" "+value2+" "+value3+" "+value4+" "+value5+" "+value6+" "+value7+" "+value8+" "+value9+" "+value10,
				      '-moz-filter': value1+" "+value2+" "+value3+" "+value4+" "+value5+" "+value6+" "+value7+" "+value8+" "+value9+" "+value10,
				      '-ms-filter': value1+" "+value2+" "+value3+" "+value4+" "+value5+" "+value6+" "+value7+" "+value8+" "+value9+" "+value10,
				      '-o-filter': value1+" "+value2+" "+value3+" "+value4+" "+value5+" "+value6+" "+value7+" "+value8+" "+value9+" "+value10,
				      'filter': value1+" "+value2+" "+value3+" "+value4+" "+value5+" "+value6+" "+value7+" "+value8+" "+value9+" "+value10
			       })
		        }
		    });
		});
		
		    jQuery('section article.Playground .col .controls .reset').click(function(){
		    	jQuery('section article.Playground .col .controls h6 span').html("");
				jQuery('.Playground .col .effect').css({ '-webkit-filter': 'none'});
				jQuery('.Playground .slider.Blur, .Playground .slider.Grayscale, .Playground .slider.Drop-shadow, .Playground .slider.Sepia, .Playground .slider.Hue-rotate, .Playground .slider.Invert, .Playground .slider.Brightness').slider({value: 0});
				jQuery('.Playground .slider.Opacity, .Playground .slider.Contrast, .Playground .slider.Saturate').slider({value: 1});
			});

});

