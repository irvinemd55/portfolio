'use strict';
var projects = [];
var portfolioView = {}; //added from portfolioView

function Projects (options) {
  this.title = options.title;
  this.category = options.category;
  this.author = options.author;
  this.authorUrl = options.authorUrl;
  this.publishedOn = options.publishedOn;
  this.body = options.body;
};
Projects.prototype.toHtml = function() {

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  var $source = $('#article-template').html();
  var templateRender = Handlebars.compile($source);
  return templateRender(this);


  $newProjects.removeAttr('class');
  // return $newProjects;
};

// projectObjects.sort(function(currentObject, nextObject) {
  // return (new Date(nextObject.publishedOn)) - (new Date(currentObject.publishedOn));
// });

// projectObjects.forEach(function(projectsObj) {
  // projects.push(new Projects(projectsObj));
// });

projects.forEach(function(projectsObj) {
  $('#projects').append(projectsObj.toHtml());
});

//portfolioView additions
portfolioView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();


  });
  $('.main-nav .tab:first').click();
};

portfolioView.handleMainNav();
Projects.fetchAll();
