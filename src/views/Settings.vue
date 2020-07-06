<template>
  <div class="content">
    <div class="page-title">
      <h3>Settings</h3>
    </div>

    <form @submit.prevent="submitSettings">
      <div class="form-group">
        <div class="form-group__title">
          Category view
        </div>
        <div class="form-group__content row">
          <label class="col m3">
            <input class="with-gap" name="category-view" type="radio" value="tabs" v-model="categoryView" />
            <span>Tabs and selects</span>
          </label>
          <label class="col m3">
            <input class="with-gap" name="category-view" type="radio" value="popup" v-model="categoryView" />
            <span>One list with popup editor</span>
          </label>
        </div>
      </div>
      <button class="btn waves-effect waves-light" type="submit">
        Save
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Settings",
  computed: {
    categoryView: {
      get () {
        return this.$store.getters.categoryView
      },
      set (val) {
        this.$store.commit('setCategoryView', val)
      }
    }
  },
  methods: {
    submitSettings () {
      try {
        this.$store.commit('setSettings', {
          categoryView: this.categoryView
        })
        this.$notify('Settings was updated')
        setTimeout(() => {
          window.location.reload() // to update route link in aside. Path is updating but route does not
        }, 500);
      } catch (error) {
        this.$notify('Something went wrong', 'error')
        throw error;
      }
    }
  }
};
</script>
