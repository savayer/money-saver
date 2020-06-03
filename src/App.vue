<template>
  <component :is="layout" />
</template>

<script>
export default {
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  }
};
</script>

<style lang="css">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
