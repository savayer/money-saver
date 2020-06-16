<template>
  <form class="card auth-card" @submit.prevent="submitLogin()">
    <div class="card-content">
      <span class="card-title mb20">Money Saver</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email)
          }"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
        >
          Email is required
        </small>
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
        >
          Invalid Email
        </small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model="password"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength)
          }"
        />
        <label for="password">Password</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
        >
          Password is required
        </small>
        <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
        >
          Too short
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Log in
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Don't you have an account?
        <router-link to="/register">
          Sign up
        </router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      email,
      required
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    async submitLogin() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password
      };

      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/");
      } catch (e) {
        /* */
      }
    }
  }
};
</script>
