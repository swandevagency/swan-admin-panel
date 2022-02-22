<template>
  <div class="login-page-wrapper">
    <form class="login-form">
      <h1 class="login-title">Login</h1>
      <input type="text" class="login-username" placeholder="Username" />
      <input type="password" class="login-password" placeholder="Password" />
      <p class="login-suggestion-text">
        Don't have an account?
        <a href="#" class="create-account">Create a new one</a>
      </p>
      <a href="#" class="forgot-password">Forgot password</a>
      <div class="form-login-actions">
        <button class="login-button">Login</button
        ><button class="cancel-button">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss">
@import "@/assets/scss/helpers/_variables.scss";

.login-page-wrapper {
  display: grid;
  min-height: 100vh;
  justify-content: center;
  align-content: center;
}
form.login-form {
  background-color: $white;
  padding: $gig-white-space $lg-white-space;
  border-radius: $xs-border-radius;
  box-shadow: $xs-smooth-shadow;
  display: inline-block;
  text-align: center;
  display: inline-flex;
  flex-direction: column;
  @include relative-child-margin($std-white-space, -bottom);
}
h1.login-title {
  font-size: $lg-font-size;
  margin-bottom: $xlg-white-space;
  color: $coral-black;
  font-weight: 500;
}
input.login-password {
  margin-bottom: $xlg-white-space;
}
p.login-suggestion-text {
  margin-bottom: $sm-white-space;
  font-size: $xs-font-size;
}
button.login-button,
button.cancel-button {
  padding: 0.4em 0.9em;
  border: none;
  border-radius: $xs-border-radius;
  font-size: $xs-font-size;
  box-shadow: 0px 0px 0px $black-00;
  transition: box-shadow $duration-30;
  background-color: white;
  color: $coral-black;
  border: 1px solid $coral-black-15;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 3px 6px $black-15;
  }
  @include relative-self-margin($std-white-space, -right);
}
button.login-button {
  background-color: $shiny-gold;
}
a.forgot-password,
a.create-account {
  color: $golden-orange;
  font-size: $xs-font-size;
}
input.login-username,
input.login-password {
  background-color: $coconut-milk;
  border-radius: $xs-border-radius;
  outline: none;
  font-size: $xs-font-size;
  border: none;
  padding: $xs-white-space $std-white-space;
  transition: box-shadow $duration-30;
  box-shadow: 0 0 0 0px $shiny-gold-00;
  &:hover,
  &:active,
  &:focus {
    border: none;
    outline: none;
    box-shadow: 0 0 0 5px $shiny-gold-50;
  }
  &::placeholder {
    color: $coral-black-50;
  }
}
</style>
