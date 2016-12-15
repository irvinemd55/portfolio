'use strict';

var portfolioView = {};

portfolioView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();


  });
  $('.main-nav .tab:first').click();
};

portfolioView.handleMainNav();
Projects.fetchAll();
//scrapped
