<template>
  <form class="card auth-card" @submit.prevent="submitRegister()">
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

      <div class="input-field">
        <input
          id="username"
          type="text"
          v-model="username"
          :class="{ invalid: $v.username.$dirty && !$v.username.required }"
        />
        <label for="username">Username</label>
        <small
          class="helper-text invalid"
          v-if="$v.username.$dirty && !$v.username.required"
        >
          Username is required
        </small>
      </div>
      <!-- <p>
        <label>
          <input type="checkbox" />
          <span>С правилами согласен</span>
        </label>
      </p> -->
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Sign up
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Do you have an account already?
        <router-link to="/login">
          Log in
        </router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: ""
    };
  },
  mixins: [validationMixin],
  validations: {
    email: {
      email,
      required
    },
    password: {
      required,
      minLength: minLength(6)
    },
    username: { required }
  },
  methods: {
    async submitRegister() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        username: this.username
      };

      try {
        await this.$store.dispatch("signIn", formData);
        this.$router.push("/");
      } catch (e) {
        /* */
      }
    }
  }
};
</script>
