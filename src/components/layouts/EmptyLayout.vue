<template>
  <div class="blue lighten-3">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "EmptyLayout"
};
</script>
