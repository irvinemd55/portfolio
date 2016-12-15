'use strict';
(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    $('#about').hide();
    $('#articles').show();
    console.log('about hidden');
  };
  module.articleController = articleController;
})(window);
