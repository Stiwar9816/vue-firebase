<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img
          class="navbar__logo"
          src="../assets/img/VueTalk-logo.png"
          width="112"
          height="28"
        />
      </router-link>
      <a
        @click.prevent="toggleNavBar"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        ref="burger"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" ref="navBar">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">
          Home
        </router-link>

        <router-link class="navbar-item" to="/">
          Create Room
        </router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <template v-if="user">
              <router-link class="button is-primary" to="/">
                <strong>Profile</strong>
              </router-link>
              <a @clik="doLogout" class="button is-light">
                Log Out
              </a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NavbarComponent",
  data() {
    return {
      burger: null,
      navBar: null
    };
  },
  mounted() {
    this.burger = this.$refs.burger;
    this.navBar = this.$refs.navBar;
  },
  methods: {
    toggleNavBar() {
      this.burger.classList.toggle("is-active");
      this.navBar.classList.toggle("is-active");
    },
    async doLogout() {
      try {
        await this.$store.dispatch("user/doLogout");
        this.$router.push({ name: "auth" });
        console.log("Logged out");
      } catch (error) {
        console.error(error.message);
      }
    }
  },
  computed: {
    ...mapState("user", ["user"])
  }
};
</script>

<style lang="sass" scoped>
.navbar-item img
  max-height: none

  .navbar__logo
    width: 200px
    height: auto
</style>
