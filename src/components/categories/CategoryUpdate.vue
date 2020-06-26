<template>
  <div class="col s12 m6">
    <div>

      <form>
        <div class="input-field">
          <select id="select">
            <option value="" disabled selected>Select a category</option>
            <option v-for="category in categories" :value="category.id" :key="category.id">
              {{ category.name }}
            </option>
          </select>
          <label>Category</label>
          <span class="helper-text invalid">Select a category</span>
        </div>
        <div class="input-field">
          <input type="text" id="name" v-model="name"/>
          <label for="name">Name</label>
          <span class="helper-text invalid">Enter name</span>
        </div>

        <div class="input-field">
          <input id="limit" type="number" v-model="limit" />
          <label for="limit">Limit</label>
          <span class="helper-text invalid">Max limit</span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Update
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import M from 'materialize-css'

export default {
  name: "CategoryUpdate",
  data() {
    return {
      name: '',
      limit: '',
      selectInstance: null
    };
  },
  computed: {
    categories () {
      return this.$store.getters.categories
    }
  },
  async mounted () {
    await this.$store.dispatch('getCategories')
    M.FormSelect.init(document.querySelector('#select'))
  },
  /* beforeDestroy () {
    this.selectInstance.destroy()
  } */
};
</script>
