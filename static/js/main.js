require.config({

  baseUrl: '/static/js/',

  paths: {
    moment: '/static/lib/moment/2.3.1/moment.min',
    util: '/static/js/util/util'
  }

});

require(['app/app'], function(app) {
  app.run();
});
