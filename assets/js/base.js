/**
 * Global javascript, loads on every page
 */

'use strict';

(function () {
  $(document).ready(function () {

    // Activate any/all Bootstrap Popovers on page
    $('[data-toggle="popover"]').popover({
      placement:  'auto',
      trigger:    'hover focus'
    });

    // activate all advanced Google Analytics tracking
    jQuery(function($) {
      $.universalAnalytics();
    });


    /**
     * "Back-to-top" widget functionality
     */

    // back-to-top click handler
    $('#back-to-top').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: '0px' });
    });

    // back-to-top hide at top
    var $window = $(window);
    $window.on('scroll', function (event) {
      var $el = $('#back-to-top');
      var top = $(document).scrollTop();

      if((top < 100) && $el.is(':visible')) {
        $el.fadeOut();
      }
      else if((top >= 100) && $el.is(':hidden')) {
        $el.fadeIn();
      }
    });
    $window.scroll(); // trigger

  });
})();
