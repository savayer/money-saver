<template>
  <div class="content">
    <div class="page-title">
      <h3>Categories</h3>
    </div>
    <section>
      <div class="row">
        <ul id="tabs" class="tabs">
          <li class="tab col s6"><a class="active" href="#create">Create</a></li>
          <li class="tab col s6"><a href="#update">Update</a></li>
        </ul>
        <div id="create" class="s12">
          <CategoryCreate />
        </div>
        <div id="update" class="s12">
          <CategoryUpdate />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from "@/components/categories/CategoryCreate";
import CategoryUpdate from "@/components/categories/CategoryUpdate";
import M from 'materialize-css'

export default {
  name: "Categories",
  components: {
    CategoryCreate,
    CategoryUpdate
  },
  mounted () {
    M.Tabs.init(document.getElementById('tabs'), {})
  }
};
</script>
