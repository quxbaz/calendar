define([], function() {

  var ret = {};

  var u = ret;

  ret.log = function() {
    return console.log.apply(console, arguments);
  };

  ret.log_style = function() {
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
  ret.fmt = function(str) {
    var args = _.rest(_.toArray(arguments));
    return str.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] !== 'undefined' ? args[number] : match;
    });
  };

  ret.renderDate = function(year, month, day) {
    return u.fmt('{0}-{1}-{2}', year, month + 1, day + 1);
  };

  ret.loop = function(fn, i) {
    for (var n=0; n < i; n++) {
      fn(i, n);
    }
  };

  ret.repeat = function(fn, i) {
    return _.map(_.range(i), fn);
  };

  return ret;

});
