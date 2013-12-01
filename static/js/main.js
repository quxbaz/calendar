require.config({

  baseUrl: '/static/js/',

  paths: {
    moment: '/static/lib/moment/2.3.1/moment.min'
  }

});

require(['app/app', 'util/tp'], function(app, tp) {
  tp.init();
  app.run();
});
