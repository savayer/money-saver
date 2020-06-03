<template>
  <div class="app-main-layout">
    <Navbar @toggle="isOpen = !isOpen" />
    <Aside :active="isOpen" />

    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/new-record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout',
  data() {
    return {
      isOpen: true
    };
  }
};
</script>
