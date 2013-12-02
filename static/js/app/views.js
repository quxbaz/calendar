define(['util/util', 'util/tp', './models'], function(u, tp, models) {

  var ret = {};

  var MONTHS_IN_YEAR = 12

  ret.Calendar = Backbone.View.extend({

    events: {
      'click .time-block': 'edit_day'
    },

    initialize: function(options) {
      this.year = options.year;
    },

    edit_day: function(ev) {

      var $target = $(ev.currentTarget);
      // $target.toggleClass('active');

      var day = new models.Day({
        date: $target.data('date')
      });

      day.fetch().done(function() {
        u.log(day);
        $('.modal .date').text(day.get('date'));
        $('.modal .editor-textarea').text(day.get('text'));
      });

      // TODO
      // $('#editor').modal('show').on('click', '.btn[data-action=confirm]', function() {
      //   day.save({
      //     text: $('.editor-textarea').val()
      //   }).always(function(model, response) {
      //     u.log(model);
      //     u.log(response);
      //   });
      // });

    },

    render: function() {
      for (var month=0; month < MONTHS_IN_YEAR; month++) {
        var row = new ret.CalendarRow({month: month, year: this.year});
        row.render().appendTo(this.el);
      }
      return this.$el;
    }

  });

  ret.CalendarRow = Backbone.View.extend({

    template: tp.get('calendar-row'),

    className: 'calendar-row',

    initialize: function(options) {
      this.month = options.month;
      this.year = options.year;
      this.date = new Date(this.year, 0);
      this.date.setMonth(this.month);
      this.days = moment(this.date).daysInMonth();
    },

    render: function() {

      var that = this;

      this.$el.html(this.template({

        month: moment(this.date).format('MMM'),

        days: u.repeat(function(day) {
          return (new models.Day({
            date: u.renderDate(that.year, that.month, day)
          })).toJSON()
        }, this.days)

      }));

      return this.$el;

    }

  });

  return ret;

});
