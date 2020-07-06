<template>
  <nav class="navbar teal lighten-2">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('toggle')">
          <i class="material-icons white-text">dehaze</i>
        </a>
        <span class="white-text">{{ date | format("datetime") }}</span>
        <!-- <router-link to="/" class="brand-logo center">
          <img src="@/assets/logo.svg" class="logo" alt="">
        </router-link> -->
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger white-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            {{ user }}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Profile
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <router-link to="/settings" class="black-text">
                <i class="material-icons">settings</i>Settings
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click="logout()">
                <i class="material-icons">assignment_return</i>Log out
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import M from "materialize-css";

export default {
  name: "Navbar",
  data() {
    return {
      date: new Date(),
      interval: null
    };
  },
  computed: {
    user() {
      return this.$store.getters.username;
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/login");
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);

    M.Dropdown.init(this.$refs.dropdown, {
      coverTrigger: false,
      constrainWidth: false,
      alignment: "right"
    });

    this.$store.dispatch("getUser");
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>
