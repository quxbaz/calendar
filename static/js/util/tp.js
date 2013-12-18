/*

  TODO: Compile all templates into a global variable SERVER-SIDE.

*/

define(['util/util'], function(util) {

  var exports = {};

  var templates = {};

  // Helpers

  Handlebars.registerHelper('times', function(times, block) {
    var html = '';
    for(var i=0; i < times; i++)
      html += block.fn(i);
    return html;
  });

  Handlebars.registerHelper('loop_date', function(start, end, block) {
    var html = '';
    util.loop_date(function(mDate, date) {
      html += block.fn({date: date});
    }, start, end);
    return html;
  });

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
