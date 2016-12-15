'use strict';

function Project (opts) {
  for (var keys in opts) {
    this[keys] = opts[keys];
  }
}

Project.projects = [];

Project.loadAll = function(projectData){
  projectData.sort(function(firstObject, secondObject) {
    return (new Date(secondObject.datePublished)) - (new Date(firstObject.datePublished));
  })
  .forEach(function(ele){
    Project.projects.push(new Project(ele));
  });
};

Project.prototype.toHtml = function() {
  var $projectTemplates = $('#project-template').html();
  var templateRender = Handlebars.compile($projectTemplates);
  return templateRender(this);
};

Project.handleMainNav = function () {
  $('.socialMedia').on('click', '.local', function() {
    $('.view').hide();
    $('#' + $(this).attr('data-content')).show();
  });
  $('.socialMedia .local:first').click();
};


Project.renderProjects= function() {Project.projects.forEach(function(projectObj) {
  $('#portfolioHighlights').append(projectObj.toHtml());
});
//  Project.handleMainNav();
};

Project.fetchAll = function() {
  if(localStorage.projects) {
    Project.loadAll(JSON.parse(localStorage.projects));
    Project.renderProjects();
  } else {
    $.getJSON('scripts/projects.json', function(data) {
      localStorage.projects = JSON.stringify(data);
      Project.loadAll(data);
      Project.renderProjects();
    });
  }
};


Project.fetchAll();
// Project.handleMainNav();
