<template>
  <div class="white blue lighten-3 auth-layout">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import keys from "@/components/helpers/keys";

export default {
  name: "AuthLayout",
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(fbError) {
      this.$notify(keys[fbError.code] || "Something went wrong", "error");
    }
  }
};
</script>
