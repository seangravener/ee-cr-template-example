Cufon.replace('#titlebar h2', { fontFamily : 'Archer Book' });
Cufon.replace('.do-cufon h3', { fontFamily : 'Archer SemiBold' });

/*
var jump=function(e)
{
     //prevent the "normal" behaviour which would be a "hard" jump
     e.preventDefault();
     //Get the target
     var target = $(this).attr("href");
     //perform animated scrolling
     $('html,body').animate(
     {
             //get top-position of target-element and set it as scroll target
    	 scrollTop: $(target).offset().top
     //scrolldelay: 2 seconds
     },1000,function()
     {
             //attach the hash (#jumptarget) to the pageurl
             location.hash = target;
     });

}

$(document).ready(function()
{
     $('a[href*=#]').bind("click", jump);
     return false;
});
*/