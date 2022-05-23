<template>
  <button
    :class="['sp-button-component', isPrimary ? 'primary' : '']"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({ name: "sp-button", props: ["isPrimary"] });
</script>

<style lang="scss">
@import "@/assets/admin-scss/helpers/_variables.scss";
button.sp-button-component {
  background-color: $white;
  border-radius: $xs-border-radius;
  border: 1px solid $coral-black-15;
  border: none;
  box-shadow: $zero-regular-shadow;
  color: $coral-black;
  cursor: pointer;
  font-size: $xs-font-size;
  font-weight: 300;
  isolation: isolate;
  outline: 1px solid $coral-black-15;
  padding: 0.7777777777777778em 1.3333333333333333em;
  position: relative;
  transition: box-shadow $duration-30, opacity $duration-30;
  &::after {
    background-color: $black;
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
  &:hover,
  &:focus {
    box-shadow: $xs-regular-shadow;
    &::after {
      opacity: $hover-opacity-dark;
    }
  }
  &.primary {
    background-color: $shiny-gold;
    &::after {
      background-color: $white;
    }
    &:hover::after {
      opacity: $hover-opacity-light;
    }
  }
  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>
