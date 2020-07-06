<template>
  <div class="content">
    <div class="page-title">
      <h3>Categories</h3>
    </div>
    <section>
      <div class="row">
        <div class="col m6">
          <div class="collection cat_list">
            <a href="#" class="collection-item" v-for="category in categories" :key="category.id">
              {{ category.name }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CategoriesPopup",
  computed: {
    categories() {
      return this.$store.getters.categories;
    }
  },
  async mounted() {
    await this.$store.dispatch("getCategories");
  }
};
</script>
