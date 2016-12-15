'use strict';
(function(module) {
  var articleController = {};

  articleController.reveal = function() {
    $('#about').hide();
    $('#articles').show();
  };
  module.articleController = articleController;
})(window);
