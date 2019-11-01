// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from './vue/platforms/web/entry-runtime-with-compiler'
import App from './App'
import Hello from './Hello'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { Hello },
  // render: h => h('div', 'message')
  render: h => h(Hello, [
    'message',
    h('div', 'div-message')
  ])
})
