/*
  almost monokai
  desert
  subdued
  tango
  tango-2
  tomorrow
  twilight
  zen-and-art
 */

define(['util/util', 'util/tp', './models'], function(util, tp, models) {

  var ret = {};

  var MONTHS_IN_YEAR = 12

  ret.Journal = Backbone.View.extend({

    template: tp.get('journal'),

    tagName: 'div',

    className: 'journal',

    events: {
      'mouseover .journal-entry' : 'change_current_date',
      'click .journal-entry'     : 'on_click_entry'
    },

    initialize: function() {
    },

    render: function() {

      var that = this;

      this.$el.html(
        this.template({
          journal  : this.model
          // days     : this.model.toJSON()
        })
      );

      this.model.each(function(day) {
        that.$(util.fmt('.journal-entry[data-date="{0}"]', day.get('date')))
          .addClass('filled');
      });

      return this.$el;
    },

    change_current_date: function(ev) {
      this.$('.current-date').text($(ev.currentTarget).data('date'));
    },

    on_click_entry: function(ev) {
      util.log($(ev.currentTarget).data('date'));
      // var D
    }

  });

  // ret.Day = Backbone.View.extend({

  //   template: tp.get('journal-day'),

  //   className: 'journal-day',

  //   initialize: function(options) {},

  //   render: function() {
  //     this.$el.html(this.template(this.model.toJSON()));
  //     return this.$el;
  //   }

  // });

  return ret;

});
