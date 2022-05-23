<template>
  <NuxtLink
    :to="to"
    :class="[
      'sidebar-content-selector-link-component',
      isActive ? 'nuxt-link-exact-active' : '',
    ]"
  >
    <div class="selector-icon-wrapper"><slot /></div>
    <div class="selector-text-wrapper">
      <p class="selector-text">{{ selectorText }}</p>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "sidebar-content-selector-link",
  props: ["selectorText", "checked", "name", "to"],
  computed: {
    isActive(): boolean {
      if (this.$route.fullPath.includes(this.to)) return true;
      else return false;
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/_variables.scss";
a.sidebar-content-selector-link-component {
  @include relative-child-margin($xs-white-space, -right);
  align-items: center;
  background-color: $light-coral-black-15;
  border-radius: $xs-border-radius;
  color: $light-coral-black;
  cursor: pointer;
  display: block;
  display: flex;
  isolation: isolate;
  outline: 1px solid $light-coral-black-15;
  padding: $sm-padding;
  position: relative;
  transition: outline $duration-30, color $duration-30;
  &.nuxt-link-exact-active {
    box-shadow: $xs-regular-shadow;
    color: $golden-orange;
    outline: 1px solid $golden-orange !important;
    span.material-icon {
      color: $golden-orange;
    }
    &::after {
      opacity: 1 !important;
    }
    .selector-icon-wrapper {
      background-color: $pearl-color;
    }
  }
  .selector-icon-wrapper {
    background-color: transparent;
    border-radius: $xs-border-radius;
    display: flex;
    padding: $xs-padding;
    transition: background-color $duration-30;
  }
  &::after {
    background-color: $white;
    border-radius: $xs-border-radius;
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity $duration-30;
    z-index: -1;
  }
  &:hover {
    &::after {
      opacity: $hover-opacity-light;
    }
    outline: 1px solid $light-coral-black-15;
  }
}
</style>
