import Vue from 'vue'

import moment from 'moment'

Vue.filter('formatDate', function (value) {
  if (value) {
    var splitDates = moment(String(value)).format('DD MMM').split(/[\s-]+/);
    return "<span class='day'>" + splitDates[0] + "</span><span class='month'>" + splitDates[1] + "</span>";
  }
})

Vue.filter('formatDate', function (value) {
  if (value) {
    var splitDates = moment(String(value)).format('DD MMM').split(/[\s-]+/);
    return "<span class='day'>" + splitDates[0] + "</span><span class='month'>" + splitDates[1] + "</span>";
  }
})

Vue.filter('formatDateString', function (value) {
  if (value) {
    return moment(String(value)).format('DD MMMM YYYY')
  }
})