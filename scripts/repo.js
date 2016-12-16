'use strict';
(function(module) {
  var repos = {};

  repos.allRepos = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/irvinemd55/repos',
      type: 'GET',
      headers: {'Authorization': 'token ' + irvineToken},
      success: function(data,message,xhr){
        repos.allRepos = data;
        console.log(data);
        console.log(message);
        console.log(xhr);
        callback();
      }
    });
  };

  module.repos = repos;
})(window);
