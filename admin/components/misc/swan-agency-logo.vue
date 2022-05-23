<template>
  <div class="swan-agency-logo-component">
    <div class="logo-image-wrapper">
      <img
        src="/img/logo/Logo.png"
        alt="Swan Agency logo image"
        class="logo-image"
      />
    </div>
    <div class="logo-text-wrapper">
      <p class="logo-text">Swan Agency</p>
      <p class="sub-text">{{ message }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: { message: { type: String, required: false } },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/variables";
.swan-agency-logo-component {
  display: flex;
  align-items: center;
  .logo-image-wrapper {
    width: 110px;
    height: 110px;
  }
  .logo-image-wrapper {
    margin-right: $std-white-space;
  }
  .logo-text-wrapper {
    display: flex;
    flex-direction: column;
    @include relative-child-margin($xs-white-space, -bottom);
  }
  p.logo-text {
    font-size: 34px;
    color: $light-coral-black;
  }
  p.sub-text {
    font-size: 18px;
    color: $light-coral-black-50;
  }
}
</style>
