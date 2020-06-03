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
  data() {
    return {
      links: [
        { name: "Bill", url: "/", exact: true },
        { name: "History", url: "/history" },
        { name: "Planning", url: "/planning" },
        { name: "New Record", url: "/new-record" },
        { name: "Categories", url: "/categories" },
        { name: "Reports", url: "/reports" }
      ]
    };
  }
};
</script>
