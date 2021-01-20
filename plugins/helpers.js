import Vue from "vue";

Vue.prototype.$__getCookie = function(self, key) {
  return self.$auth.$storage.getCookie(key);
};

Vue.prototype.$__setCookie = (self, key, value) => {
  return self.$auth.$storage.setCookie(key, value, { isJson: true });
};

// Vue.prototype.$__getValue = key => {
//   return this.$auth.$storage.getUniversal(key);
// };

// Vue.prototype.$__setValue = (key, value) => {
//   return this.$auth.$storage.setUniversal(key, value);
// };
