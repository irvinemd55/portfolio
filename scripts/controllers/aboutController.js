'use strict';
(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {

    $('#articles').hide();
    $('#about').show();
    console.log('articles hidden');
  };

  module.aboutController = aboutController;
})(window);
