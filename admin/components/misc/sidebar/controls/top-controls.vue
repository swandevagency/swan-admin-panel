<template>
  <div class="top-controls-component">
    <span class="user-profile-picture">
      <img src="/img/avatar-sample.jpg" alt="" class="avatar-image" />
    </span>
    <button class="night-mode"><IconNightMode /></button>
    <button class="menu-button" @click="$emit('collapseChange')">
      <IconBurgerMenu />
    </button>
    <button class="language-button">
      <img src="/icons/png/usa-flag.png" alt="" class="language-flag" />
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  components: {
    IconBurgerMenu: () =>
      import("@/admin/components/icons/icon-burger-menu.vue"),
    IconNightMode: () => import("@/admin/components/icons/icon-night-mode.vue"),
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/variables";
.top-controls-component {
  @include relative-child-margin($std-white-space, -bottom);
  align-items: center;
  display: flex;
  flex-direction: column;
  span.user-profile-picture {
    background-color: $coral-black-50;
    border-radius: $round-border-radius;
    display: block;
    height: 64px;
    width: 64px;
  }
  img.avatar-image {
    border-radius: $round-border-radius;
    object-fit: cover;
  }
  button.night-mode {
    background-color: whitesmoke;
  }
}
</style>
