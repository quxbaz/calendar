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

    events: {},

    template: tp.get('journal'),

    tagName: 'div',

    className: 'journal',

    initialize: function() {
    },

    render: function() {
      this.$el.html(
        this.template({days: this.model.toJSON()})
      );
      return this.$el;
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
