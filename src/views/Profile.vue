<template>
  <div class="content">
    <div class="page-title">
      <h3>Profile</h3>
    </div>

    <form class="form" @submit.prevent="submitProfile()">
      <div class="input-field">
        <input id="username" type="text" v-model="user" />
        <label for="username" class="active">Name</label>
        <span
          class="helper-text invalid"
          v-if="$v.user.$dirty && !$v.user.required"
        >
          Name is required
        </span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Update
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  validations: {
    user: {
      required
    }
  },
  name: "Profile",
  computed: {
    user: {
      get() {
        return this.$store.getters.username;
      },
      set(val) {
        this.$store.commit("setUsername", val);
      }
    }
  },
  methods: {
    async submitProfile() {
      this.$v.$touch();
      console.log(this.$v);
      if (this.$v.$invalid) {
        console.log("invalid");
        return;
      }
      try {
        console.log("valid");
        await this.$store.dispatch("setUser", this.user);
        this.$notify("The data was updated");
      } catch (e) {
        /* */
      }
    }
  }
};
</script>
