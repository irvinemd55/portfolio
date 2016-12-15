'use strict';
(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {

    $('#articles').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(window);
