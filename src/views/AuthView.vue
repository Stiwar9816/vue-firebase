<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <!-- Login Form  -->
          <template v-if="isLogin">
            <h1 class="title has-text-centered">Login</h1>
            <form @submit.prevent="doLogin()">
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    v-model="userData.email"
                    class="input"
                    type="email"
                    placeholder="example@example.com"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <p class="control has-icons-left">
                  <input
                    v-model="userData.password"
                    class="input"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field has-text-right">
                <p class="control">
                  <button
                    class="button is-success"
                    :class="{ 'is-loading': isLoading }"
                  >
                    Login
                  </button>
                </p>
              </div>
              <a href="#" @click="isLogin = false">Don't have an account?</a>
            </form>
          </template>
          <!-- End of Login Form  -->

          <!-- Register Form  -->

          <template v-else>
            <h1 class="title has-text-centered">Register</h1>
            <form @submit.prevent="doRegister()">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input
                    v-model="userData.name"
                    class="input"
                    type="text"
                    placeholder="e.g Alex Smith"
                    required
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    v-model="userData.email"
                    class="input"
                    type="email"
                    placeholder="example@example.com"
                    required
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <p class="control has-icons-left">
                  <input
                    v-model="userData.password"
                    class="input"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field has-text-right">
                <p class="control">
                  <button
                    class="button is-success"
                    :class="{ 'is-loading': isLoading }"
                  >
                    Register
                  </button>
                </p>
              </div>
              <a href="#" @click="isLogin = true">Want to login?</a>
            </form>
          </template>
          <!-- End Register Form  -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AuthView",
  data() {
    return {
      isLoading: false,
      isLogin: true,
      userData: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    redirect() {
      this.$router.push({ name: "Home" });
    },
    resetData() {
      this.userData.email = this.userData.name = this.userData.password = "";
    },
    async doLogin() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("user/doLogin", {
          email: this.userData.email,
          password: this.userData.password
        });
        console.log("Logged in");
        this.resetData();
        this.redirect();
      } catch (error) {
        console.error(error.message);
      } finally {
        this.isLoading = false;
      }
    },
    async doRegister() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("user/doRegister", {
          name: this.userData.name,
          email: this.userData.email,
          password: this.userData.password
        });
        console.log("Account created");
        this.resetData();
        this.redirect();
      } catch (error) {
        console.error(error.message);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>
