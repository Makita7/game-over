<script setup>
import { RouterView } from 'vue-router';
import NavigationDrawer from './components/NavigationDrawer.vue';
</script>

<template>
    <div class="img">
      <div class="d-flex">
        <img src="./assets/assets_logo.png" class="logo mt-4 ml-auto mr-auto" />

      </div>
      <NavigationDrawer/>
      <div style="margin-left: 56px;" class="pa-6">
        <RouterView />
      </div>
    </div>
</template>

<style scoped lang="scss">
::v-deep{
    .wrap{
      flex-wrap: wrap;
    }
    .logo{
      max-height: 80px;
    }
  }
  .img{
    background-image: url('./assets/bg.png') !important;
    background-repeat: no-repeat;
    background-size: auto;
    min-height: 100vh;
    z-index: -5;
    position: absolute;
    width: 100%;
  }
</style>
