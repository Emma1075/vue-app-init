<template>
  <div id="app">
    <widget-header></widget-header>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <widget-footer></widget-footer>
  </div>
</template>

<script>
import WidgetHeader from '@/components/header/Header';
import WidgetFooter from '@/components/footer/Footer';

export default {
  name: 'App',
  components: { WidgetHeader, WidgetFooter },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
