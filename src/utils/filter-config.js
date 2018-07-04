import moment from 'moment';

function install(Vue) {
  Vue.filter('date-format', value => moment(value).format('YYYY-DD-MM'));
}

export default install;
