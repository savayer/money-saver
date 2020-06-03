<template>
  <div class="content">
    <div class="page-title">
      <h3>Profile</h3>
    </div>

    <form class="form">
      <div class="input-field">
        <input id="username" type="text" class="validate" v-model="username" />
        <label for="username" class="active">Name</label>
        <span class="helper-text invalid">name</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      username: ""
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  created() {
    this.username = this.user;
  }
};
</script>
