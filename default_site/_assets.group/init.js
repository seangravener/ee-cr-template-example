Cufon.replace('#navigation ul li a', { fontFamily : 'Archer Bold', hover : { color:'#DFC0A7' } });
Cufon.replace('#navigation ul li a.active', { fontFamily : 'Archer Bold Italic', hover : { color:'#DFC0A7' } });
Cufon.replace('.main-tabs ul li a', { fontFamily : 'Archer Bold', hover : { color:'#FFCFDE' } });
Cufon.replace('#head .title', { fontFamily : 'Archer Book' });
Cufon.replace('.do-cufon h2', { fontFamily : 'Archer Book' });
Cufon.replace('.do-cufon legend', { fontFamily : 'Archer Book' });
Cufon.replace('#sidebar h3', { fontFamily : 'Archer Bold' });

/**
* @author Remy Sharp
* @url http://remysharp.com/2007/01/25/jquery-tutorial-text-box-hints/
*/

(function ($) {

$.fn.hint = function (blurClass) {
  if (!blurClass) { 
    blurClass = 'blur';
  }
    
  return this.each(function () {
    // get jQuery version of 'this'
    var $input = $(this),
    
    // capture the rest of the variable to allow for reuse
      title = $input.attr('title'),
      $form = $(this.form),
      $win = $(window);

    function remove() {
      if ($input.val() === title && $input.hasClass(blurClass)) {
        $input.val('').removeClass(blurClass);
      }
    }

    // only apply logic if the element has the attribute
    if (title) { 
      // on blur, set value to title attr if text is blank
      $input.blur(function () {
        if (this.value === '') {
          $input.val(title).addClass(blurClass);
        }
      }).focus(remove).blur(); // now change all inputs to title
      
      // clear the pre-defined text when form is submitted
      $form.submit(remove);
      $win.unload(remove); // handles Firefox's autocomplete
    }
  });
};

})(jQuery);