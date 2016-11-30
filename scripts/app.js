'use strict';
var projects = [];

function Projects (options) {
  this.title = options.title;
  this.category = options.category;
  this.author = options.author;
  this.authorUrl = options.authorUrl;
  this.publishedOn = options.publishedOn;
  this.body = options.body;
};
Projects.prototype.toHtml = function() {
  var $newProjects = $('#projects .template').clone();
  $newProjects.attr('data-category', this.category);
  $newProjects.find('h1').html(this.title);
  $newProjects.find('a').html(this.author);
  $newProjects.find('a').attr('href', this.authorUrl);
  $newProjects.find('.projects-body').html(this.body);
  $newProjects.find('time[pubdate]').attr('title', this.publishedOn);
  $newProjects.find('time').text('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  $newProjects.removeAttr('class');
  return $newProjects;
};

projectObjects.sort(function(currentObject, nextObject) {
  return (new Date(nextObject.publishedOn)) - (new Date(currentObject.publishedOn));
});

projectObjects.forEach(function(projectsObj) {
  projects.push(new Projects(projectsObj));
});

projects.forEach(function(projectsObj) {
  $('#projects').append(projectsObj.toHtml());
});
