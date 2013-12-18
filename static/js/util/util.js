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
    // TODO: Test this.
    return moment().year(year).month(month).date(day + 1).format(App.dateFormat);
    // return u.fmt('{0}-{1}-{2}', year, month + 1, day + 1);
  };

  // todo: Allow @i to be a range. E.g., [2, 12]
  ret.loop = function(fn, i, context) {
    if (typeof context !== 'undefined')
      fn = _.bind(fn, context);
    for (var n=0; n < i; n++) {
      fn(i, n);
    }
  };

  ret.repeat = function(fn, i) {
    return _.map(_.range(i), fn);
  };

  /*
    Loops between two dates day-by-day. @fn is passed a Moment object.
    todo: Test the performance of this against using the native Date object.
  */
  ret.loop_date = function(fn, start, end) {
    var mCurrent = moment(start, App.dateFormat);
    var mEnd = moment(end, App.dateFormat);
    for (; !mCurrent.isAfter(mEnd); mCurrent.add('days', 1)) {
      fn(mCurrent, mCurrent.format(App.dateFormat));
    }
  };

  return ret;

});
