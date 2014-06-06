// dependencies
define(['plugin/charts/highcharts/common/wrapper'], function(Highcharts) {

// widget
return Backbone.View.extend(
{
    // initialize
    initialize: function(app, options) {
        this.app        = app;
        this.options    = options;
    },
            
    // render
    draw : function(process_id, chart, request_dictionary) {
        var hc = new Highcharts(this.app, this.options);
        hc.draw(process_id, 'area', chart, request_dictionary);
    }
});

});