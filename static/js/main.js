require.config({

  baseUrl: '/static/js/',

  paths: {
    moment: '/static/lib/moment/2.3.1/moment.min'
  }

});

require(['util/tp', 'app/app'], function(tp, app) {
  tp.init();
  app.run();
});
