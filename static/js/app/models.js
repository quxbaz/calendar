define(['util/util'], function(util) {

  var ret = {};

  ret.Day = Backbone.Model.extend({

    url: function() {
      if (typeof this.id !== 'undefined')
        return '/day/' + this.id;
      else
        return  '/day';
    },

    defaults: {
      date: '',
      text: ''
    },

    initialize: function() {}

  });

  ret.Journal = Backbone.Collection.extend({

    model: ret.Day,

    // @start_date, @end_date
    initialize: function(models, options) {

      var that = this;

      // TODO: Default @end_date to 1 year after @start_date.
      this.start_date = options.start_date;
      this.end_date = options.end_date;

      var mock_models = [
        {
          date: '2013-01-01',
          text: 'Got a puppy!'
        },
        {
          date: '2013-01-02',
          text: 'Puppy had puppies!'
        },
        {
          date: '2013-01-03',
          text: 'Puppy is sick!'
        }
      ];

      this.add(mock_models);
      // this.fillEmptyDays();

      // this.each(function(day) {
      //   util.log(day.get('date') + ':', day.get('text'));
      // });

    },

    // TODO: Use this?
    // fillEmptyDays: function() {
    //   var that = this;
    //   util.loopDate(function(date) {
    //     that.add(new ret.Day({
    //       date: date.format(App.dateFormat),
    //       text: ''
    //     }));
    //   }, this.start_date, this.end_date);
    // }

  });

  // ret.Month = Backbone.Collection.extend({

  //   initialize: function(attrs, options) {
  //     this.month = options.month;
  //     this.year = options.year;
  //     this.date = new Date(this.year, 0);
  //     this.date.setMonth(this.month);
  //     this.nDays = moment(this.date).daysInMonth();
  //   }

  // });

  ret.Year = Backbone.Collection.extend({

    initialize: function(attrs, options) {
    }

  });

  ret.Calendar = Backbone.Model.extend({

    initialize: function(attrs, options) {
      // this.year = options.year;
    }

  });

  return ret;

});
