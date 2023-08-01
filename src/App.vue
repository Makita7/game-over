<script setup>
import { RouterView } from 'vue-router';
import NavigationDrawer from './components/NavigationDrawer.vue';
</script>

<template>
  <NavigationDrawer/>
  <div style="margin-left: 56px;">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
