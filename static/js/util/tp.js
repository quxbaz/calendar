/*

  TODO: Compile all templates into a global variable SERVER-SIDE.

*/

define(['util/util'], function(u) {

  var exports = {};

  var templates = {};

  $('.template').each(function() {
    templates[this.getAttribute('name')] = Handlebars.compile($(this).html());
  });

  exports.init = function() {
    // Empty function
  };

  exports.get = function(template_name) {
    if (_.has(templates, template_name))
      return templates[template_name];
    else
      throw "No such template.";
  };

  return exports;

});
