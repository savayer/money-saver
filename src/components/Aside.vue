<template>
  <ul class="sidenav app-sidenav" :class="{ open: active }">
    <router-link
      v-for="(link, index) in links"
      :key="index"
      tag="li"
      :to="link.url"
      active-class="active"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-teal pointer">{{ link.name }}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "Aside",
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    links: [
      { name: "Bill", url: "/", exact: true },
      { name: "History", url: "/history" },
      { name: "Planning", url: "/planning" },
      { name: "New Record", url: "/new-record" },
      { name: "Categories", url: "/categories" },
      { name: "Reports", url: "/reports" }
    ]
  }),
/*  computed: {
    categoriesLink () {
      return this.$store.getters.categoryView === 'tabs' ? '/categories' : '/categories2'
    }
  },
  watch: {
    categoriesLink (val) {
      this.links.find(c => c.name === "Categories").url = val
    }
  },
  mounted () {
    this.links = [
      { name: "Bill", url: "/", exact: true },
      { name: "History", url: "/history" },
      { name: "Planning", url: "/planning" },
      { name: "New Record", url: "/new-record" },
      { name: "Categories", url: this.categoriesLink },
      { name: "Reports", url: "/reports" }
    ];
  } */
  mounted () {
    const categoriesLink = this.$store.getters.categoryView === 'tabs' ? '/categories' : '/categories2'

    this.links.find(c => c.name === "Categories").url = categoriesLink
  }
};
</script>
