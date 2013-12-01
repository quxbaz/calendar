define([], function() {

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


  return ret;

});
