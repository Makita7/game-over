<script setup>
import { RouterView } from 'vue-router';
import NavigationDrawer from './components/NavigationDrawer.vue';
</script>

<template>
    <div class="img">
      <NavigationDrawer/>
      <div style="margin-left: 56px;">
        <RouterView />
        <p>hi</p>
      </div>
    </div>
</template>

<style scoped>
  .img{
    background-image: url('./assets/bg.png') !important;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
</style>
