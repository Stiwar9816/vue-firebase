<template>
  <div id="app">
    <NavbarComponent />
    <router-view />
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent";
export default {
  name: "App",
  components: {
    NavbarComponent
  }
};
</script>
<style lang="scss">
</style>
