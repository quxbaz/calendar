define(['util', './models'], function(u, models) {

  var ret = {};

  var MONTHS_IN_YEAR = 12

  ret.Calendar = Backbone.View.extend({

    events: {
      'click .time-block': 'edit_day'
    },

    initialize: function(opts) {
      this.year = opts.year;
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

      $('#editor').modal('show').on('click', '.btn[data-action=confirm]', function() {
        day.save({
          text: $('.editor-textarea').val()
        }).always(function(model, response) {
          u.log(model);
          u.log(response);
        });
      });

    },

    render: function() {

      var date = new Date(this.year, 0);

      for (var month=0; month < MONTHS_IN_YEAR; month++) {
        var $row = $('<div>').addClass('time-row').appendTo(this.$el);
        date.setMonth(month);
        var daysInMonth = moment(date).daysInMonth();
        for (var day=0; day < daysInMonth; day++) {
          var model = new models.Day({
            date: u.fmt('{0}-{1}-{2}', this.year, month + 1, day + 1)
          });
          var view = new ret.DayBlock({model: model});
          view.render().appendTo($row);
          // $('<span>').addClass('time-block').appendTo($row);
        }
        $('<span>').addClass('row-month').prependTo($row).text(moment(date).format('MMM'));
      }

    }

  });

  ret.CalendarRow = Backbone.View.extend({

    // template: _.template($('')),

  });

  ret.DayBlock = Backbone.View.extend({

    tagName: 'span',

    className: 'time-block',

    attributes: function() {
      return {'data-date': this.model.get('date')}
    },

    template: _.template($('#tp-time-block').html()),

    initialize: function(options) {
      this.model = options.model;
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this.$el;
    }

  });

  return ret;

});
