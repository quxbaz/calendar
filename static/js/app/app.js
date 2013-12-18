define(['util/util', 'moment', './models', './views'], function(u, moment, models, views) {

  var ret = {};

  ret.run = function() {

    // var journal = new models.Journal(mock_models, {
    var journal = new models.Journal(null, {
      start_date: '2013-01-01',
      end_date: '2013-12-31'
    });

    new views.Journal({
      model: journal
    }).render().appendTo('.journal-well');

    // var calendar = new models.Calendar({year:2013});

    // new views.Calendar({
    //   model: calendar // TODO
    // }).render().appendTo('.calendar');

  };

  return ret;

});
