import Vue from "vue";

const _this = Vue;

Vue.prototype.$__getCookie = function(key) {
  return this.$auth.$storage.getCookie(key);
};

Vue.prototype.$__setCookie = (key, value) => {
  return this.$auth.$storage.setCookie(key, value, isJson);
};

Vue.prototype.$__getValue = key => {
  return this.$auth.$storage.getUniversal(key);
};

Vue.prototype.$__setValue = (key, value) => {
  return this.$auth.$storage.setUniversal(key, value);
};
