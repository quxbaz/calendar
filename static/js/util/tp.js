/*

  TODO: Compile all templates into a global variable SERVER-SIDE.

*/

define(['util/util'], function(u) {

  var exports = {};

  var templates = {};

  $('.template').each(function() {
    var name = this.getAttribute('name');
    templates[name] = Handlebars.compile($(this).html());
    if ($(this).is('[partial]'))
      Handlebars.registerPartial(name, templates[name]);
  });

  exports.init = function() {
    // This is an empty function on purpose.
  };

  exports.get = function(template_name) {
    if (_.has(templates, template_name))
      return templates[template_name];
    else
      throw "No such template.";
  };

  return exports;

});
