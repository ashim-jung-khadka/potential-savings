highcharts = require('highcharts');
require('highcharts/modules/data')(highcharts);
require('highcharts/modules/drilldown')(highcharts);
require('highcharts/modules/exporting')(highcharts);
highchartsMore = require('highcharts-more');
highchartsMore(highcharts);

require('./charts/load-theme');
require('./charts/bubble');
require('./charts/bar-drill');
require('./charts/pie-drill');
require('./charts/child-bubble');
require('./charts/map');
