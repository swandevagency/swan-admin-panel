<template>
  <div class="login-page-wrapper">
    <form
      :class="['login-form', loading ? 'loading' : '']"
      @submit.prevent="authenticate"
    >
      <h1 class="login-title">Login</h1>
      <p class="login-message">Enter your username and email address</p>
      <SpInput type="text" placeholder="Username" v-model="username" required />
      <SpInput
        class="login-email"
        type="text"
        placeholder="Email"
        v-model="email"
        required
      />
      <p class="forgot-username-message">
        Cannot login to your account?
        <SpLink @click.native="forgotUsername">Forgot username</SpLink>
      </p>
      <div class="form-login-actions">
        <SpButton isPrimary="true" :disabled="loading">Login</SpButton>
        <SpButton :disabled="loading">Cancel</SpButton>
      </div>
    </form>
    <SwanAgcLogo
      class="login-loading-element"
      v-if="loading"
      message="Authenticating..."
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Notification, NotificationIcons } from "~/admin/plugins/Notification";

export default Vue.extend({
  layout: "empty",
  data: () => ({
    loading: false as boolean,
    username: "" as string,
    email: "" as string,
  }),
  components: {
    SpLink: () => import("@/admin/components/modules/buttons/sp-link.vue"),
    SpButton: () => import("@/admin/components/modules/buttons/sp-button.vue"),
    SpInput: () => import("@/admin/components/modules/inputs/sp-input.vue"),
    SwanAgcLogo: () => import("@/admin/components/misc/swan-agc-logo.vue"),
  },
  methods: {
    async authenticate(e: any) {
      if (e.submitter.innerText.toLowerCase() === "cancel") {
        history.back();
        return;
      }

      this.loading = true;

      // Send email to the user
      const res = await this.$axios
        .post("/login", {
          username: this.username,
          email: this.email,
        })
        .catch((error) => {
          if (error && error.response && error.response.data)
            this.showMessage(
              "Error",
              "Invalid credentials!",
              NotificationIcons.error
            );
          else
            this.showMessage(
              "Error",
              "Cannot connect to the server!",
              NotificationIcons.error
            );
        });
      if (res)
        this.showMessage(
          "Info",
          "An email has been sent to your email address!",
          NotificationIcons.info
        );
      this.loading = false;
    },
    showMessage(title: string, message: string, type: NotificationIcons) {
      new Notification()
        .setDuration(5000)
        .setTitle(title)
        .setDescription(message)
        .setIcon(type)
        .showNotification();
    },
    forgotUsername() {
      this.showMessage(
        "Info",
        "This feature is not available!",
        NotificationIcons.info
      );
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/_variables.scss";

.login-page-wrapper {
  display: flex;
  position: relative;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  form.login-form {
    background-color: $white;
    padding: $gig-white-space $lg-white-space;
    border-radius: $xs-border-radius;
    box-shadow: $xs-smooth-shadow;
    min-width: 450px;
    text-align: center;
    display: inline-flex;
    flex-direction: column;
    position: relative;
    @include relative-child-margin($std-white-space, -bottom);
    &::after {
      content: "";
      opacity: 0;
      position: absolute;
      background-color: $white-50;
      inset: 0;
      pointer-events: none;
      border-radius: $xs-border-radius;
      transition: opacity $duration-30;
      backdrop-filter: blur(10px);
      z-index: 1000;
    }
    &.loading {
      &::after {
        opacity: 1;
        pointer-events: all;
      }
    }
    a {
      align-self: center;
    }
  }
  h1.login-title {
    font-size: $lg-font-size;
    margin-bottom: $xlg-white-space;
    color: $coral-black;
    font-weight: 400;
  }
  input.login-email {
    margin-bottom: $xlg-white-space;
  }
  p {
    margin-bottom: $sm-white-space;
    font-size: $xs-font-size;
    font-weight: 300;
  }
  .form-login-actions {
    display: flex;
    justify-content: center;
    @include relative-child-margin($std-white-space, -right);
  }
  .login-loading-element {
    position: absolute;
    opacity: 0;
    animation: login-fade-in $duration-30 forwards;
    z-index: 10000;
  }
}

@keyframes login-fade-in {
  100% {
    opacity: 1;
  }
}
</style>
