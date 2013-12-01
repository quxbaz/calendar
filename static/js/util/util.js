define([], function() {

  var exports = {};

  exports.log = function() {
    return console.log.apply(console, arguments);
  };

  exports.log_style = function() {
    var args = _.toArray(arguments);

    if (args.length < 2)
      return console.log.apply(console, arguments);

    args[0] = '%c' + args[0]
    var style = JSON.stringify(args.pop())
      .replace(',', ';')
      .replace(/[{}"']/g, '');

    return console.log.apply(console, args.concat([style]));
  };

  // TODO: Test this.
  exports.fmt = function(str) {
    var args = arguments;
    return str.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] !== 'undefined' ? args[number] : match;
    });
  };

  return exports;

});
