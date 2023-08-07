<script>
  import { RouterView } from 'vue-router';
  import NavigationDrawer from './components/NavigationDrawer.vue';

  export default{
    data(){
      return{
      }
    },
    components: {
      NavigationDrawer,
      RouterView,
    },
    methods: {
    }
  }
</script>

<template>
    <div class="img">

      <div class="d-flex">
        <img src="./assets/assets_logo.png" class="logo mt-4 ml-auto mr-auto" />

      </div>
      <NavigationDrawer/>
      <div style="margin-left: 56px;" class="pa-6 index">
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
    .filter{
        height: 100vh;
        widows: 100vh;
        z-index: +100;
        position: relative;
        padding-top: 15rem;
    }

    .pill{
        font-weight: 700;
        letter-spacing: 1.2px;
    }

    .fadingIn{
    animation: fadeIn;
    animation-duration: 1s;
  }

  @keyframes fadeIn {
    from {opacity: 0%;}
    to {opacity: 100%;}
  }
}
.img {
      background-image: url("./assets/bg.png") !important;
      background-repeat: repeat-y;
      background-size: auto;
      min-height: 100vh !important;
      z-index: -5;
      position: absolute;
      width: 100%;
}
.index{
  z-index: -3;
  position: relative;
}
</style>
