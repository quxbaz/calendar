define(['util/util', 'moment', './models', './views'], function(u, moment, models, views) {

  var ret = {};

  ret.run = function() {

    var that = this;

    var calendar = new views.Calendar({year: 2013});

    calendar.render();

    calendar.$el.appendTo('.calendar');

  };

  return ret;

});
