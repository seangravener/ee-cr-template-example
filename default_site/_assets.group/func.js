Cufon.replace('#navigation ul li a', { fontFamily : 'Archer Bold', hover : { color:'#DFC0A7' } });
Cufon.replace('#navigation ul li a.active', { fontFamily : 'Archer Bold Italic', hover : { color:'#DFC0A7' } });
Cufon.replace('.main-tabs ul li a', { fontFamily : 'Archer Bold', hover : { color:'#FFCFDE' } });
Cufon.replace('.master-btn', { fontFamily : 'Archer Bold', hover : { color:'#FFBFD1' } });
Cufon.replace('#head .title', { fontFamily : 'Archer Book' });
Cufon.replace('#footer ul li a', { fontFamily : 'Archer Medium', hover : { color:'#FFBFD1' } });
Cufon.replace('#footer p', { fontFamily : 'Archer Medium' });
Cufon.replace('.ad .text h3', { fontFamily : 'Archer Bold' });
Cufon.replace('#sidebar .blog h2', { fontFamily : 'Archer Bold' });
Cufon.replace('.sidebar-ad h3', { fontFamily : 'Archer Bold' });
Cufon.replace('.sidebar-ad .info h2 a', { fontFamily : 'Archer Bold', hover : { color:'#44301f' } });
Cufon.replace('.yellow-btn', { fontFamily : 'Archer SemiBold', hover : { color:'#44301f' } });
Cufon.replace('.personal-info h2', { fontFamily : 'Archer Book' });
Cufon.replace('.kit-details h3', { fontFamily : 'Archer Bold' });
Cufon.replace('.kit-details h2', { fontFamily : 'Archer Book' });
Cufon.replace('.gallery-details h2', { fontFamily : 'Archer Book' });
Cufon.replace('.head-t, .head-i', { fontFamily : 'Archer Bold' });
Cufon.replace('.event-head h2', { fontFamily : 'Archer Book' });
Cufon.replace('.event-details h3', { fontFamily : 'Archer SemiBold' });
Cufon.replace('#sidebar .blog ul li a', { fontFamily : 'JottFLF-Casual.67', hover : { color:'#44301f' } });
Cufon.replace('.profile h1', { fontFamily : 'Archer Bold' });
Cufon.replace('.profile h2', { fontFamily : 'Archer Book' });
Cufon.replace('.creation-steps .title', { fontFamily : 'Archer Book' });

Cufon.replace('.tableHeading', { fontFamily : 'Archer SemiBold' });

var message = {

	pop : function( type,message ){
		
		switch(type){
			case 'error':
				classname = "error";
				break;
			default:
				classname = "info";				
				break;
		}
								
		if( $("#message").length ){

			$('#message')
			.stop()
			.fadeOut('fast')
			.html( message )
			.attr( 'class', classname )
			.fadeIn('fast')
			.delay(7000)
			.fadeOut('fast');
			
		} else {

			message = "<div id='message' class='"+classname+"'>"+message+"</div>";
			
			$("#content")
			.prepend(message);
			
			$("#message")
			.delay(7000)
			.fadeOut('fast');	
			
		}		
		
	}

}

var initStarRatings = function( form ){
	
	//star ratings
	$form = form || $("#content form.rating");
	
	$form.each(function(e){
	
		if( $(this).find('input[type="submit"]').is(":visible") ){
	
			$(this).children().not("select").hide();
			action = $(this).attr('action');
			
			// Create target element for onHover titles
			$caption = $("<span/>");

			$(this).stars({
				inputType: "select",
				captionEl: $caption, // point to our newly created element
				callback: function(ui, type, value)
				{
					$.getJSON(action, {rate: value}, function(response){
						
						if(response.success){
							message.pop('info',response.message);	
						} else {
							message.pop('error',response.message);	
						}
						
					});
				}
		
			});
		
			// Make it available in DOM
			$caption.appendTo( $(this) );
	
		}
		
	});

}
	
$(function () {
			
	//datepicker
	$("#datepicker").datepicker({
		showOn: 'button',
		buttonImage: 'css/images/ico_calendar.png',
		buttonImageOnly: true

	});
	
	initStarRatings();
	
	// focus/blur text fields
	$('.blink')
		.focus(function(){
			if( $(this).val() == $(this).attr('title') ) {
				$(this).val('');
			}
		})
		.blur(function(){
			if( $(this).val() == '' ) {
				$(this).val( $(this).attr('title') );
			}
		});
	
	// master box contents
	$('.master-btn').live("click",function () {
		$(this).toggleClass('master-btn-active');
		$('.box-master').slideToggle('fast');
		return false;
	});
		
	// close ad
	$('.ad .close-btn').live("click",function () {
		$(this).parent().slideUp();
		return false;
	});
	
	$("form").find("input[type='password']").each(function(val) {
	
	    var input = $(this);
	
	    //insert link to show plain-text
	    $("<a>").text("Show password").addClass("show-plain").attr({
	      title: "Show the password in plain text",
	      href: "#"
	    }).insertAfter(input);
	    
	});
	
	//add click handler for show-plain link(s)
	$(".show-plain").live("click", function() {
	
	  //cache selector
	  var input = $(this).prev();
	
	  //create new text input
	  $("<input>").attr({
	    id: input.attr("id"),
	    type: "text",
	    name: input.attr("name")
	  }).val(input.val()).addClass(input.attr("class")).insertAfter(input.prev());
	  input.remove();
	
	  //change link text and attributes
	  $(this).text("Hide password").removeClass("show-plain").addClass("show-hidden").attr({
	    title: "Obscure the text"
	  });
	
	  //stop link being followed
	  return false;
	});

	//add click handler for show-plain link(s)
	$(".show-hidden")
	.live("click", function() {
	
	  //cache selector
	  var input = $(this).prev();
	
	  //create new password input
	  $("<input>").attr({
	    id: input.attr("id"),
	    type: "password",
	    name: input.attr("name")
	  }).val(input.val()).addClass(input.attr("class")).insertAfter(input.prev());
	  input.remove();
	
	  //change link text and attributes
	  $(this).text("Show password").removeClass("show-hidden").addClass("show-plain").attr({
	    title: "Show the password in plain text"
	  });
	
	  //stop link being followed
	  return false;
	  
	});

	$('#more')
	.live('click',function(e){

		e.preventDefault();
		
		href = $(this).attr('href');

		if(!$('#load-items').length){
			
			if( $('.ajaxcontent').length ){
			
				container = '.ajaxcontent';
				$moreBtn = $('#more');
				
				$moreBtn
				.addClass('loading');
				
				$content = $('#content');
				
				$content
				.find(container)
				.after('<div id="load-items" style="display: none;"></div>');
				
				$content
				.find('#load-items')
				.load(href+ " #content",function(){
					
					$('#load-items')
					.find('#content')
					.attr('id',null);
					
					$content = $('#load-items').find('.ajaxcontent > *');
										
					$moreBtn.attr( 'href' , $('#load-items .yellow-btn:first').attr('href') );

					$('#content .ajaxcontent')
					.append( $content )
					.parents('#content')
					.find('#load-items').css('opacity',0).slideDown('fast',function(){

						initStarRatings( $('#content form.rating') );

						$(this).remove();

						$('#more')
						.removeClass('loading');
						
						$('load-items').fadeIn('fast');
						
					});
				
				});
			
			}
			
		}
	
	});

	/*$('.main-tabs a')
	.live('click',function(e){

		e.preventDefault();
		
		$(this)
		.parents('ul')
		.find('.active')
		.removeClass('active');
		
		$(this).parents('li').addClass('active');
				
		href = $(this).attr('href');

		if(!$('#load-items').length && !$('#content:animated').length){
			
			$('#content')
			.delay(100)
			.addClass("loading");
			
			$('#content > *')
			.fadeOut(100)
			.parents('#content')
			.load(href+ " #content",function(){
				
				$(this).find("#content").attr('id',null).attr('class',null);

				if( $('form.rating').length )
					initStarRatings();

				Cufon.replace('.main-tabs ul li a', { fontFamily : 'Archer Bold', hover : { color:'#44301f' } });
				Cufon.replace('.personal-info h2', { fontFamily : 'Archer Book' });
				Cufon.replace('.yellow-btn', { fontFamily : 'Archer SemiBold', hover : { color:'#44301f' } });
				Cufon.replace('.head-t, .head-i', { fontFamily : 'Archer Bold' });
				Cufon.replace('.event-head h2', { fontFamily : 'Archer Book' });

				$('#content')
				.delay(100)
				.removeClass("loading");

				$('#content > *')
				.fadeIn(100);
			
			});

		}
	
	});*/
	
	$(".preview").fancybox({
		ajax : {
		    type	: "GET",
		    data	: 'preview=true'
		}
	});


});